import React from 'react';
import { Link } from 'react-router';
import TopBar from './TopBar.js';

const Layout = (props) => {
  return(
    <div>
      <span>
      <TopBar />
      </span>
        { props.children }
    </div>
  );
};

export default Layout;
