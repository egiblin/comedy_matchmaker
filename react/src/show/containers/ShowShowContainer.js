import React, { Component }  from 'react';
import ShowShow from '../components/ShowShow';

class ShowShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(`/api/v1/shows/${this.props.params.id}`)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({data: responseData});
      });
  }
  render() {

    return(
      <div className="shows">
      <ShowShow
        key={this.state.data.id}
        id={this.state.data.id}
        name={this.state.data.name}
        location={this.state.data.location}
        image_url={this.state.data.show_photo}
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

export default ShowShowContainer;
