import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import SearchBar from './SearchBar'

class TopBar extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div style={{width: '100%', height: '100px', backgroundColor: '#EDF6EE', display: 'inline-block'}}>
        <div style={{float: 'left', padding: '1em'}} onClick={() => {
          browserHistory.push('/performers')
        }}>Performers
        </div>

        <div style={{float: 'left', padding: '1em'}} onClick={() => {
          browserHistory.push('/teams')
        }}>Teams
        </div>

        <div style={{float: 'left', padding: '1em'}} onClick={() => {
          browserHistory.push('/shows')
        }}>Shows
        </div>
        <SearchBar />

        <div style={{margin: 'auto' }} onClick={() => {
          browserHistory.push('/')
        }}><h2>Comedy Matchmaker</h2>
        </div>
      </div>
    );
  }
}

export default TopBar;
