import React, { Component } from 'react';
import UserTile from '../components/UserTile';

class UsersIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/users.json')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({users: responseData});
      });
  }

  render() {
    let users = this.state.users.map(user => {
      return(
        <UserTile
          key={user.id}
          id={user.id}
          first_name={user.first_name}
          last_name={user.last_name}
          image_url={user.avatar.url}
        />
      );
    });
    return(
      <div className="users">
        {users}
        {this.props.children}
      </div>
    );
  }
}

export default UsersIndexContainer;
