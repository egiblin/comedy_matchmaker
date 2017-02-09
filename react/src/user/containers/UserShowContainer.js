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
        key={this.state.data.user.id}
        id={this.state.data.user.id}
        first_name={this.state.data.user.first_name}
        last_name={this.state.data.user.last_name}
        image_url={this.state.data.user.avatar.url}
        users={this.state.data.users}
        />
        </div>
      );
    }
  }
}

export default UserShowContainer;
