import React, { Component } from 'react';
import ShowTile from '../components/ShowTile';

class ShowsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/shows.json')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({shows: responseData});
      });
  }

  render() {
    let shows = this.state.shows.map(show => {
      return(
        <ShowTile
          key={show.id}
          id={show.id}
          name={show.name}
          location={show.location}
          image_url={show.show_photo.url}
          slots={show.slots}
          date={show.date}
          time={show.time}
          duration={show.duration}
          creator={show.creator}
          price={show.price}
        />
      );
    });
    return(
      <div className="shows">
        {shows}
        {this.props.children}
      </div>
    );
  }
}

export default ShowsIndexContainer;
