import React, { Component }  from 'react';
import UserShow from '../components/UserShow';
import { Link } from 'react-router';

class UserShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      shows: [],
      teams: [],
      all_teams: []
    };
    this.handleTeamAdd = this.handleTeamAdd.bind(this);
  }

  componentDidMount() {
    fetch(`/api/v1/users/${this.props.params.id}`)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({data: responseData.user, shows: responseData.shows, teams: responseData.teams, all_teams: responseData.all_teams});
      });
  }

  handleTeamAdd(event) {
    let newTeam = event.target.value;
    this.setState({ teams: this.state.teams.concant([newTeam]) });
  }


  render() {
    if (this.state.data.length === 0) {
      return(
        <div></div>
      );
    }
    else {
      let shows = this.state.shows.map(show =>{
        return(
          <div>
            <h3><Link to={`/shows/${show.id}`} id="link-text"> {show.name} </Link></h3>
          </div>
        );
      });
      let teams = this.state.teams.map(team =>{
        return(
          <div>
            <h3><Link to={`/teams/${team.id}`} id="link-text"> {team.name} </Link></h3>
          </div>
        );
      });
      return(
        <div className="users">
          <UserShow
          key={this.state.data.id}
          id={this.state.data.id}
          first_name={this.state.data.first_name}
          last_name={this.state.data.last_name}
          image_url={this.state.data.avatar.url}
          users={this.state.data.users}
          teams={this.state.all_teams}
          />
          <h2>Teams</h2>
            {teams}
          <h2>Shows</h2>
              {shows}
        </div>
      );
    }
  }
}

export default UserShowContainer;
