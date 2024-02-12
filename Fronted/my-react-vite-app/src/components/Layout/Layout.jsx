import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = (props) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>{props.children}</main>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Layout;
