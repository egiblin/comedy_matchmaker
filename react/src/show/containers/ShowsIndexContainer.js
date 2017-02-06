import React, { Component } from 'react';

class ShowsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/shows.json')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({shows: responseData});
      });
  }

  render() {
    return (
      <div style={{width: '100%', height: '100px', backgroundColor: 'yellow'}}>
        <h1>Upcoming Shows</h1>
        <ul id="main-page">
          {this.state.shows.map(function(show){
            return <li key={show.id}><a id="main-list-items" href={"shows/" + show.id}><img width="100" height="100" src={show.show_photo.url} />
            <h4>{show.name}</h4></a></li>;
          })}
          <li><a href='/shows/new' id="new-show" >Add New Show</a></li>
      </ul>
      </div>
    );
  }
}

export default ShowsIndexContainer;import React, { Component } from 'react';
import TeamTile from '../components/TeamTile'

class TeamPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/teams.json')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({teams: responseData});
      });
  }

  render() {
    let teams = this.state.teams.map(team => {
      return(
        <TeamTile
          key={team.id}
          id={team.id}
          name={team.name}
          location={team.location}
          image_url={team.team_photo.url}
        />
      );
    });
    return(
      <div className="teams">
        <h2> I am the Bars Index Container </h2>
        {teams}
        {this.props.children}
      </div>
    )
  }
}

export default TeamPage;
