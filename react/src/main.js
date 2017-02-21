    import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import routes from './routes';
import Root from './components/Root';

let reactAppRender = (element) => {
  let current_user = JSON.parse(document.getElementById('App').dataset.currentuser);
  ReactDOM.render(
    <Root browserHistory={browserHistory} routes={routes} current_user={current_user}/>,
    element
  );
};

$(function() {
  let reactApp = document.getElementById('App');
  if (reactApp) {
    reactAppRender(reactApp);
  }
});
