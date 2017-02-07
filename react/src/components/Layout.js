import React from 'react';
import { Link } from 'react-router';
import TopBar from './TopBar.js';
import TabBar from './TabBar.js';

const Layout = (props) => {
  return(
    <div>
      <span>
      <TopBar />
      </span>
      <div id="wrapper">
        <div id="content">
        <TabBar />
        { props.children }
        </div>
      </div>
    </div>
  );
};

export default Layout;
