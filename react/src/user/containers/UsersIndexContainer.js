import React, { Component } from 'react';

class UserPage extends Component {
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
    return (
      <div style={{width: '100%', height: '100px', backgroundColor: 'yellow'}}>
        <h1>Comedians</h1>
        <ul id="main-page">
          {this.state.users.map(function(user){
            return <li key={user.id}><a id="main-list-items" href={"users/" + user.id}><img width="100" height="100" src={user.avatar.url} />
            <h4>{user.first_name} {user.last_name}</h4></a></li>;
          })}
      </ul>
      </div>
    );
  }
}

export default UserPage;
