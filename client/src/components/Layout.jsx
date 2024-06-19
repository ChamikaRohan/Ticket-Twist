import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: '56px' }}>
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
