import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

$(function() {
  // let shows = JSON.parse(document.getElementById('App').dataset.shows);
  ReactDOM.render(
    <div>
      <App
      // shows={shows}
      />
    </div>,
    document.getElementById('App')
  );
});
