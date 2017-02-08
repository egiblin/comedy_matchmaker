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
      addClicked: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleAddClicked = this.handleAddClicked.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/teams.json')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({teams: responseData});
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

  handleLocationChange(event) {
    let newLocation = event.target.value;
    this.setState({ location: newLocation });
  }

  handleSubmit(event) {
    event.preventDefault();
    let fetchBody = { name: this.state.name, location: this.state.location };
    let newTeams = [];
    fetch('/api/v1/teams',
      { method: "POST",
      body: JSON.stringify(fetchBody) })
      .then(function(response) {
        newTeams = response.json();
        return newTeams;
      }).then((response) => this.setState({
        teams: response,
        name: "",
        location: "",
        addClicked: false
      }));
  }

  render() {
    let clicked = this.state.addClicked;
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
        <TeamForm
        handleSubmit={this.handleSubmit}
        handleNameChange={this.handleNameChange}
        handleLocationChange={this.handleLocationChange}
        handleAddClicked={this.handleAddClicked}
        clicked={clicked}/>
        {teams.reverse()}
        {this.props.children}
      </div>
    );
  }
}

export default TeamsIndexContainer;
