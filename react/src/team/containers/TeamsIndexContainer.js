import React, { Component } from 'react';
import TeamTile from '../components/TeamTile';
import TeamForm from '../components/TeamForm';

class TeamsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      name: "",
      location: "",
      current_user: "",
      addClicked: false,
      team_photo: "",
      user_teams: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleAddClicked = this.handleAddClicked.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/teams.json', {credentials: 'same-origin'})
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({teams: responseData.teams, current_user: responseData.current_user, user_teams: responseData.user_teams});
      });
  }

  handleAddClicked(event) {
    if (this.state.addClicked === false){
      this.setState({addClicked: true});
    } else {
      this.setState({addClicked: false});
    }
  }

  handleNameChange(event) {
    let newName = event.target.value;
    this.setState({ name: newName });
  }

  handleImageChange(event) {
    let newImage = event.target.value;
    this.setState({ team_photo: newImage });
  }

  handleLocationChange(event) {
    let newLocation = event.target.value;
    this.setState({ location: newLocation });
  }

  handleSubmit(event) {
    event.preventDefault();
    let fetchBody = { name: this.state.name, location: this.state.location, team_photo: this.state.team_photo };
    let current_user = this.state.current_user;
    let newTeams = [];
    fetch('/api/v1/teams',
      { method: "POST", credentials: 'same-origin',
      body: JSON.stringify(fetchBody) })
      .then(function(response) {
        newTeams = response.json();
        current_user.teams << newTeams;
        return newTeams;
      }).then((response) => this.setState({
        teams: response,
        name: "",
        location: "",
        users: "",
        team_photo: "",
        addClicked: false
      }));
  }

  render() {
    let clicked = this.state.addClicked;
    let user_teams = this.state.user_teams.map(team => {
      return(
        <TeamTile
          key={team.id}
          id={team.id}
          name={team.name}
          location={team.location}
          image_url={team.team_photo}
          users={team.users}
        />
      );
    });
    let teams = this.state.teams.map(team => {
      return(
        <TeamTile
          key={team.id}
          id={team.id}
          name={team.name}
          location={team.location}
          image_url={team.team_photo}
          users={team.users}
        />
      );
    });
    if (this.state.current_user !== undefined && this.state.current_user !== null) {
      return(
        <div>
          <div className="row small-up-3 teams" id="team-index">
            <br />
            <TeamForm
            handleSubmit={this.handleSubmit}
            handleNameChange={this.handleNameChange}
            handleLocationChange={this.handleLocationChange}
            handleImageChange={this.handleImageChange}
            handleAddClicked={this.handleAddClicked}
            clicked={clicked}/>
            <h1 className="indextitle">Your Teams</h1>
            {user_teams}
          </div>
          <div className="row small-up-2 medium-up-3 teams" id="team-index">
            <h1 className="indextitle">All Teams</h1>
            {teams.reverse()}
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return(
        <div>
          <div className="row small-up-2 medium-up-3 teams" id="team-index">
            <h1 className="indextitle">All Teams</h1>
            {teams.reverse()}
            {this.props.children}
          </div>
        </div>
      );
    }
  }
}

export default TeamsIndexContainer;
