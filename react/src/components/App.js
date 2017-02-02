import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    }

    render() {
   return (
     <div>
       <ul id="main-page">
          {this.props.shows.map(function(show){
            return (<li key={show.id}><a id="main-list-items" href={"shows/" + show.id}>{show.name}</a>
            <button>See Performers</button></li>);
          })}
        </ul>
      </div>
    );
  }
}

export default App;
