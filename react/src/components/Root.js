import React from 'react';
import { Router } from 'react-router';

const Root = ({browserHistory, routes, current_user}) => {
  return(
    <Router history={browserHistory} routes={routes} current_user={current_user} />
  );
};

export default Root;
