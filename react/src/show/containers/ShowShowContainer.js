import React, { Component }  from 'react';
import ShowShow from '../components/ShowShow';
import SubmissionForm from '../components/SubmissionForm';
import SubmissionTile from '../components/SubmissionTile';

class ShowShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      submissions: [],
      pitch: "",
      improv: false,
      selected: false,
      team: null,
      current_user: this.props.location.query.current_user,
      addClicked: false,
      teams: [],
      users: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePitchChange = this.handlePitchChange.bind(this);
    this.handleImprovChange = this.handleImprovChange.bind(this);
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
    this.handleTeamChange = this.handleTeamChange.bind(this);
    this.handleAddClicked = this.handleAddClicked.bind(this);
  }

  componentDidMount() {
    fetch(`/api/v1/shows/${this.props.params.id}`, {credentials: 'same-origin'})
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({data: responseData.show, current_user: responseData.current_user, teams: responseData.teams, submissions: responseData.submissions, users: responseData.users});
      });
  }

  handleAddClicked(event) {
    if (this.state.addClicked === false){
      this.setState({addClicked: true});
    } else {
      this.setState({addClicked: false});
    }
  }

  handlePitchChange(event) {
    let newPitch = event.target.value;
    this.setState({ pitch: newPitch });
  }

  handleImprovChange(event) {
    let newImprov = event.target.value;
    this.setState({ improv: newImprov });
  }

  handleSelectedChange(submission, event){
    event.preventDefault();
    if (this.state.selected === false){
      this.setState({selected: true});
    } else {
      this.setState({selected: false});
    }
    let fetchBody = {selected: this.state.selected};
    fetch(`/api/v1/shows/${this.props.params.id}/submissions/.json`,
      { method: "PUT", credentials: 'same-origin',
      body: JSON.stringify(fetchBody) })
  }

  handleTeamChange(event) {
    let newTeam = event.target.value;
    this.setState({ team: newTeam });
  }

  handleSubmit(event) {
    event.preventDefault();
    let fetchBody = { pitch: this.state.pitch, improv: this.state.improv,
    selected: this.state.selected, team: this.state.team, user: this.state.current_user, show: this.props.params.id };
    let newSubmissions = [];
    fetch(`/api/v1/shows/${this.props.params.id}/submissions.json`,
      { method: "POST", credentials: 'same-origin',
      body: JSON.stringify(fetchBody) })
      .then(function(response) {
        newSubmissions = response.json();
        return newSubmissions;
      }).then((response) => this.setState({
        shows: response,
        pitch: "",
        improv: false,
        selected: false,
        team: null,
        addClicked: false
      }));
  }

  render() {
    let current_user = this.state.current_user;
    let clicked = this.state.addClicked;
    let teams = this.state.teams;
    let improv = this.state.improv;
    let users = this.state.users;
    let handleSelectedChange = this.handleSelectedChange;
    let user_ids = {};
    if (users.length > 0) {
      for(let i = 0; i < users.length; i++) {
        user_ids[users[i].id] = (users[i].first_name + " " + users[i].last_name);
      }
    }
    let submissions = this.state.submissions.map(submission => {
      return(
        <SubmissionTile
          key={submission.id}
          id={submission.id}
          user_id={submission.user_id}
          pitch={submission.pitch}
          improv={submission.improv}
          selected={submission.selected}
          team={submission.team}
          user_ids={user_ids}
          show_admin={false}
          handleSelectedChange={handleSelectedChange}
        />
      );
    });
    if (this.state.data.length === 0) {
      return(
        <div></div>
      );
    }
    else if (user_ids[current_user.id] !== this.state.data.creator){
      return(
        <div className="shows">
        <SubmissionForm
          current_user={current_user}
          teams={teams}
          improv={improv}
          handleSubmit={this.handleSubmit}
          handlePitchChange={this.handlePitchChange}
          handleImprovChange={this.handleImprovChange}
          handleTeamChange={this.handleTeamChange}
          handleAddClicked={this.handleAddClicked}
          clicked={clicked}
          />
        <ShowShow
          key={this.state.data.id}
          id={this.state.data.id}
          name={this.state.data.name}
          location={this.state.data.location}
          image_url={this.state.data.show_photo.url}
          slots={this.state.data.slots}
          date={this.state.data.date}
          time={this.state.data.time}
          duration={this.state.data.duration}
          creator={this.state.data.creator}
          price={this.state.data.price}
          submissions={this.state.data.submissions}
        />
        {submissions}
        </div>
      );
    }
    else {
      submissions = this.state.submissions.map(submission => {
        return(
          <SubmissionTile
            key={submission.id}
            id={submission.id}
            user_id={submission.user_id}
            pitch={submission.pitch}
            improv={submission.improv}
            selected={submission.selected}
            team={submission.team}
            user_ids={user_ids}
            show_admin={true}
            handleSelectedChange={handleSelectedChange}
          />
        );
      });
      return(
        <div className="shows">
        <ShowShow
          key={this.state.data.id}
          id={this.state.data.id}
          name={this.state.data.name}
          location={this.state.data.location}
          image_url={this.state.data.show_photo.url}
          slots={this.state.data.slots}
          date={this.state.data.date}
          time={this.state.data.time}
          duration={this.state.data.duration}
          creator={this.state.data.creator}
          price={this.state.data.price}
          submissions={this.state.data.submissions}
        />
        {submissions}
        </div>
      );
    }
  }
}

export default ShowShowContainer;
