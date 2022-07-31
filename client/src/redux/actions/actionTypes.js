const ACTION_TYPES = {
  CLEAR_ERROR: 'CLEAR_ERROR',

  TOGGLE_THEME: 'TOGGLE_THEME',

  SHOW_SIGN_IN: 'SHOW_SIGN_IN',
  HIDE_SIGN_IN: 'HIDE_SIGN_IN',

  SHOW_SIDEBAR: 'SHOW_SIDEBAR',
  HIDE_SIDEBAR: 'HIDE_SIDEBAR',

  SHOW_SEARCHBAR: 'SHOW_SEARCHBAR',
  HIDE_SEARCHBAR: 'HIDE_SEARCHBAR',

  GET_ME: 'GET_ME',
  GET_ME_REQUEST: 'GET_ME_REQUEST',
  GET_ME_SUCCESS: 'GET_ME_SUCCESS',
  GET_ME_ERROR: 'GET_ME_ERROR',

  SIGN_UP: 'SIGN_UP',
  SIGN_UP_REQUEST: 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'SIGN_UP_ERROR',

  SIGN_IN: 'SIGN_IN',
  SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: 'SIGN_IN_ERROR',

  SIGN_OUT: 'SIGN_OUT',
  SIGN_OUT_REQUEST: 'SIGN_OUT_REQUEST',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
  SIGN_OUT_ERROR: 'SIGN_OUT_ERROR',

  AUTHORIZED: 'AUTHORIZED',
  NOT_AUTHORIZED: 'NOT_AUTHORIZED',

  REFRESH_TOKEN: 'REFRESH_TOKEN',
  REFRESH_TOKEN_REQUEST: 'REFRESH_TOKEN_REQUEST',
  REFRESH_TOKEN_SUCCESS: 'REFRESH_TOKEN_SUCCESS',
  REFRESH_TOKEN_ERROR: 'REFRESH_TOKEN_ERROR',

  AUTH_REQUEST: 'AUTH_REQUEST',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_ERROR: 'AUTH_ERROR',
  AUTH_CLEAR_ERROR: 'AUTH_CLEAR_ERROR',
  AUTH_EXIT: 'AUTH_EXIT',

  TOGGLE_POPULAR_CAROUSEL: 'TOGGLE_POPULAR_CAROUSEL',
  TOGGLE_NEW_CAROUSEL: 'TOGGLE_NEW_CAROUSEL',
  TOGGLE_HOT_NEW_CAROUSEL: 'TOGGLE_HOT_NEW_CAROUSEL',

  GET_MANGA: 'GET_MANGA',
  GET_MANGA_REQUEST: 'GET_MANGA_REQUEST',
  GET_MANGA_SUCCESS: 'GET_MANGA_SUCCESS',
  GET_MANGA_ERROR: 'GET_MANGA_ERROR',

  GET_MANGA_CATALOG: 'GET_MANGA_CATALOG',
  GET_MANGA_CATALOG_REQUEST: 'GET_MANGA_CATALOG_REQUEST',
  GET_MANGA_CATALOG_SUCCESS: 'GET_MANGA_CATALOG_SUCCESS',
  GET_MANGA_CATALOG_ERROR: 'GET_MANGA_CATALOG_ERROR',

  GET_MANGA_SEARCH: 'GET_MANGA_SEARCH',
  GET_MANGA_SEARCH_REQUEST: 'GET_MANGA_SEARCH_REQUEST',
  GET_MANGA_SEARCH_SUCCESS: 'GET_MANGA_SEARCH_SUCCESS',
  GET_MANGA_SEARCH_ERROR: 'GET_MANGA_SEARCH_ERROR',
  CLEAR_MANGA_SEARCH: 'CLEAR_MANGA_SEARCH',
  SET_SEARCH_VALUE: 'SET_SEARCH_VALUE',

  GET_MANGA_COVERS: 'GET_MANGA_COVERS',
  GET_MANGA_COVERS_REQUEST: 'GET_MANGA_COVERS_REQUEST',
  GET_MANGA_COVERS_SUCCESS: 'GET_MANGA_COVERS_SUCCESS',
  GET_MANGA_COVERS_ERROR: 'GET_MANGA_COVERS_ERROR',

  GET_CHAPTER: 'GET_CHAPTER',
  GET_CHAPTER_REQUEST: 'GET_CHAPTER_REQUEST',
  GET_CHAPTER_SUCCESS: 'GET_CHAPTER_SUCCESS',
  GET_CHAPTER_ERROR: 'GET_CHAPTER_ERROR',

  GET_CHAPTERS: 'GET_CHAPTERS',
  GET_CHAPTERS_REQUEST: 'GET_CHAPTERS_REQUEST',
  GET_CHAPTERS_SUCCESS: 'GET_CHAPTERS_SUCCESS',
  GET_CHAPTERS_ERROR: 'GET_CHAPTERS_ERROR',

  GET_CHAPTER_PAGES: 'GET_CHAPTER_PAGES',
  GET_CHAPTER_PAGES_REQUEST: 'GET_CHAPTER_PAGES_REQUEST',
  GET_CHAPTER_PAGES_SUCCESS: 'GET_CHAPTER_PAGES_SUCCESS',
  GET_CHAPTER_PAGES_ERROR: 'GET_CHAPTER_PAGES_ERROR',

  GET_NEXT_CHAPTER_ID: 'GET_NEXT_CHAPTER_ID',
  GET_NEXT_CHAPTER_ID_REQUEST: 'GET_NEXT_CHAPTER_ID_REQUEST',
  GET_NEXT_CHAPTER_ID_SUCCESS: 'GET_NEXT_CHAPTER_ID_SUCCESS',
  GET_NEXT_CHAPTER_ID_ERROR: 'GET_NEXT_CHAPTER_ID_ERROR',

  GET_FIRST_CHAPTER_ID: 'GET_FIRST_CHAPTER_ID',
  GET_FIRST_CHAPTER_ID_REQUEST: 'GET_FIRST_CHAPTER_ID_REQUEST',
  GET_FIRST_CHAPTER_ID_SUCCESS: 'GET_FIRST_CHAPTER_ID_SUCCESS',
  GET_FIRST_CHAPTER_ID_ERROR: 'GET_FIRST_CHAPTER_ID_ERROR',

  GET_TAG_LIST: 'GET_TAG_LIST',
  GET_TAG_LIST_REQUEST: 'GET_TAG_LIST_REQUEST',
  GET_TAG_LIST_SUCCESS: 'GET_TAG_LIST_SUCCESS',
  GET_TAG_LIST_ERROR: 'GET_TAG_LIST_ERROR',

  SAVE_MANGA_TO_LIST: 'SAVE_MANGA_TO_LIST',
  SAVE_MANGA_TO_LIST_REQUEST: 'SAVE_MANGA_TO_LIST_REQUEST',
  SAVE_MANGA_TO_LIST_SUCCESS: 'SAVE_MANGA_TO_LIST_SUCCESS',
  SAVE_MANGA_TO_LIST_ERROR: 'SAVE_MANGA_TO_LIST_ERROR',

  GET_MANGA_LISTS: 'GET_MANGA_LISTS',
  GET_MANGA_LISTS_REQUEST: 'GET_MANGA_LISTS_REQUEST',
  GET_MANGA_LISTS_SUCCESS: 'GET_MANGA_LISTS_SUCCESS',
  GET_MANGA_LISTS_ERROR: 'GET_MANGA_LISTS_ERROR',

  REMOVE_MANGA_FROM_LIST: 'REMOVE_MANGA_FROM_LIST',
  REMOVE_MANGA_FROM_LIST_REQUEST: 'REMOVE_MANGA_FROM_LIST_REQUEST',
  REMOVE_MANGA_FROM_LIST_SUCCESS: 'REMOVE_MANGA_FROM_LIST_SUCCESS',
  REMOVE_MANGA_FROM_LIST_ERROR: 'REMOVE_MANGA_FROM_LIST_ERROR',

  GET_LIST: 'GET_LIST',
  GET_LIST_REQUEST: 'GET_LIST_REQUEST',
  GET_LIST_SUCCESS: 'GET_LIST_SUCCESS',
  GET_LIST_ERROR: 'GET_LIST_ERROR',
};

export default ACTION_TYPES;
