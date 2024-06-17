import React from 'react';
import NavBar from './NavBar.jsx';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: '56px' }}>{/* Add padding to avoid content being hidden behind the fixed navbar */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
