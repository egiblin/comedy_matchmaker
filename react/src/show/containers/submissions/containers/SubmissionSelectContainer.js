import React, { Component }  from 'react';
import SubmissionTile from '../components/SubmissionTile';

class SubmissionSelectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
    };
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
  }

  handleSelectedChange(submission, event){
    event.preventDefault();
    if (this.state.selected === false){
      this.setState({selected: true});
    } else {
      this.setState({selected: false});
    }
  }

  render() {
    return(
      <SubmissionTile
        key={this.props.id}
        id={this.props.id}
        user_id={this.props.user_id}
        pitch={this.props.pitch}
        improv={this.props.improv}
        selected={this.props.selected}
        name={this.props.name}
        team={this.props.team}
        show_admin={true}
        handleSelectedChange={this.handleSelectedChange}
      />
    );
  }
}

export default SubmissionSelectContainer;
