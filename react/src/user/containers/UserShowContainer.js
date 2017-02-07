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
    return(
      <div className="user">
      <UserShow
        key={this.state.data.id}
        id={this.state.data.id}
        first_name={this.state.data.first_name}
        last_name={this.state.data.last_name}
        image_url={this.state.data.avatar}
        slots={this.state.data.slots}
        date={this.state.data.date}
        time={this.state.data.time}
        duration={this.state.data.duration}
        creator={this.state.data.creator}
        price={this.state.data.price}
      />
      </div>
    );
  }
}

export default UserShowContainer;
