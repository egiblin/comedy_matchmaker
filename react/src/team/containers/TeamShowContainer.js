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
    return(
      <div className="team">
      <TeamShow
        key={this.state.data.id}
        id={this.state.data.id}
        name={this.state.data.name}
        location={this.state.data.location}
        image_url={this.state.data.team_photo}
      />
      </div>
    );
  }
}

export default TeamShowContainer;
