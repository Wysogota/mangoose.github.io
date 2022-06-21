import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import cx from 'classnames';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './components/SignIn';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const { theme: { bgAccentTheme, mainTheme } } = useSelector(({ themes }) => themes);

  useEffect(() => {
    document.body.className = cx(bgAccentTheme, mainTheme);
  }, [mainTheme]);

  return (
    <>
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />

      <SignIn />
      <Sidebar />
    </>
  );
};

export default App;
