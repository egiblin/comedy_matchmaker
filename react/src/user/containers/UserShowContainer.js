import React, { Component }  from 'react';
import UserShow from '../components/UserShow';

class UserShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(`/api/v1/users/${this.props.params.id}`)
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
        <div className="users">
        <UserShow
        key={this.state.data.id}
        id={this.state.data.id}
        first_name={this.state.data.first_name}
        last_name={this.state.data.last_name}
        image_url={this.state.data.avatar.url}
        />
        </div>
      );
    }
  }
}

export default UserShowContainer;
