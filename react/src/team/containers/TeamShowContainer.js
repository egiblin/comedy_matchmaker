import React, { Component }  from 'react';
import TeamShow from '../components/TeamShow';

class TeamShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(`/api/v1/teams/${this.props.params.id}`)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({data: responseData});
      });
  }
  render() {
    if (this.state.data.length === 0) {
      return(
        <div></div>
      );
    }
    else {
      return(
        <div className="teams">
        <TeamShow
        key={this.state.data.team.id}
        id={this.state.data.team.id}
        name={this.state.data.team.name}
        location={this.state.data.team.location}
        image_url={this.state.data.team.team_photo.url}
        users={this.state.data.users}
        />
        </div>
      );
    }
  }
}

export default TeamShowContainer;
