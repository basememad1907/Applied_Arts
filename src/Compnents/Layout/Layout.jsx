import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
const Layout = ()=> {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
export default Layout