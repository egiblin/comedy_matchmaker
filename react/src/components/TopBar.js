import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import SearchBar from './SearchBar';
import BackButton from './BackButton.js';

class TopBar extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div style={{width: '100%', height: '60px', backgroundColor: '#EDF6EE', display: 'inline-block'}}>
        <div style={{float: 'left', padding: '1em'}} onClick={() => {
          browserHistory.push('/users');
        }}><BackButton />
        </div>

        <SearchBar />

        <div onClick={() => {
          browserHistory.push('/');
        }}><h4 id="main-headline">Comedy Matchmaker</h4>
        </div>
      </div>
    );
  }
}

export default TopBar;
