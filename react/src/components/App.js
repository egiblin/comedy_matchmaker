import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    }

    render() {

      return (
       <div>
          <ul id="adding-columns">
            <li><a href='/shows/new' id="new-show">Add New Show</a></li>
            <li><a href='/teams/new' id="new-team">Add New Team</a></li>
          </ul>
          <ul id="main-page">
            {this.props.shows.map(function(show){
              return (<li className="main-page-items" key={show.id}><a id="main-list-items" href={"shows/" + show.id}>
              <img id="team-show-photos" src={show.show_photo.url} />
              <h3 id="display-team-name">{show.name}</h3>
              </a>
              <button>See Performers</button></li>);
            })}
          </ul>
        </div>
      );
    }
}

export default App;
