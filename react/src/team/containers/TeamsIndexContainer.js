import React, { Component } from 'react';
import TeamTile from '../components/TeamTile';

class TeamsIndexContainer extends Component {
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
        {teams}
        {this.props.children}
      </div>
    );
  }
}

export default TeamsIndexContainer;
