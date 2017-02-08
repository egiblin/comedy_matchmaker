import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class TabBar extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div id="main-tab-bar" style={{width: '100%', backgroundColor: '#EDF6EE', display: 'inline-block'}}>
        <div id="main-user-button" style={{float: 'left', padding: '1em'}} onClick={() => {
          browserHistory.push('/users');
        }}>Users
        </div>

        <div id="main-team-button" style={{float: 'left', padding: '1em'}} onClick={() => {
          browserHistory.push('/teams');
        }}>Teams
        </div>

        <div id="main-show-button" style={{float: 'left', padding: '1em'}} onClick={() => {
          browserHistory.push('/shows');
        }}>Shows
        </div>
      </div>
    );
  }
}

export default TabBar;
