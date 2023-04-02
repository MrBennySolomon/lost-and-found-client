import React          from 'react';
import { Outlet }     from 'react-router-dom';
import MainNavigation from './MainNavigation';
import Footer         from './Footer';

const Root = () => {
  return (
    <>
      <MainNavigation/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Root;