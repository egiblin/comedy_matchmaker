import React, { Component } from 'react';
import TopBar from './TopBar';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import TeamsPage from './team';
import PerformerPage from './performer';
import ShowPage from './show';

class App extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div>
      <TopBar />
      <Router history={browserHistory}>
        <Route path='/teams' component={TeamsPage} />
        <Route path='/performers' component={PerformerPage} />
        <Route path='/shows' component={ShowPage} />
      </Router>
      </div>
    );
  }
}

export default App;
// <ul id="main-page">
//   {this.props.shows.map(function(show){
//     return (<li key={show.id}><a id="main-list-items" href={"shows/" + show.id}>{show.name}</a>
//     <button>See Performers</button></li>);
//   })}
// </ul>
