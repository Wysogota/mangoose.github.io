import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../../redux/actions/actionCreators';
import { useSearchParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import ColBlock from '../../components/Blocks/ColBlock';
import SearchInput from '../../components/Searchbar/SearchInput';
import Genres from '../../components/Catalog/Genres';
import MangaCatalog from '../../components/Catalog/MangaCatalog';
import PaginationButtons from '../../components/PaginationButtons';
import { useCheckingEmptyValues, usePagination } from '../../hooks';
import { getPageTitle } from '../../common/functions';
import CONSTANTS from '../../constants';
const {
  PARAM_NAME: { PAGE, FILTER: { TITLE, TAGS, SORT } },
  PAGES: { CATALOG: { name } },
} = CONSTANTS;

const limit = 32;

const Catalog = () => {
  const { inputValue, mangaSearch, total, isFetching } = useSelector(({ mangaSearch }) => mangaSearch);
  const { getMangaSearch, clearMangaSearch, setSearchValue } = bindActionCreators(actionCreators, useDispatch());
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    document.title = getPageTitle(name);
    const titleParamValue = searchParams.get(TITLE);
    if (!inputValue && titleParamValue) setSearchValue(titleParamValue);
    return () => clearMangaSearch();
  }, []);

  useEffect(() => {
    const isFocused = document.activeElement === document.querySelector('[data-name="searchInput"]');
    if (isFocused) {
      searchParams.set(PAGE, 1);
      inputValue
        ? searchParams.set(TITLE, inputValue)
        : searchParams.delete(TITLE);
      setSearchParams(searchParams, { replace: true });
    }
  }, [inputValue]);

  useEffect(() => {
    searchParams.set(PAGE, 1);
    setSearchParams(searchParams, { replace: true });
  }, [searchParams.get(SORT)]);

  const queryParams = {
    [TITLE]: searchParams.get(TITLE),
    [TAGS]: searchParams.getAll(TAGS),
    [SORT]: searchParams.get(SORT),
  };
  usePagination({ actionCreator: getMangaSearch, queryParams, limit });

  const emptyCatalog = useCheckingEmptyValues(mangaSearch, 'Catalog Empty', isFetching);

  return (
    <Container>
      <Row>
        <ColBlock>
          <h3 className='pb-3'>Catalog</h3>
          <SearchInput limit={limit} className='mb-3' />
          <Genres />
        </ColBlock>
      </Row>
      {emptyCatalog ? emptyCatalog :
        <>
          <Row>
            <MangaCatalog
              catalog={mangaSearch}
              className='col-10 col-sm-7 col-md-6 col-lg-4 col-xl-3'
            />
          </Row>
          <Row>
            <PaginationButtons itemCount={total} limit={limit} />
          </Row>
        </>
      }
    </Container>
  );
};

export default Catalog;
