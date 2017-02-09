import React, { Component } from 'react';
import ShowTile from '../components/ShowTile';
import ShowForm from '../components/ShowForm';

class ShowsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      name: "",
      location: "",
      duration: "",
      time: "",
      date: "",
      price: "",
      slots: 0,
      addClicked: false,
      current_user: this.props.location.query.current_user
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSlotsChange = this.handleSlotsChange.bind(this);
    this.handleAddClicked = this.handleAddClicked.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/shows.json', {credentials: 'same-origin'})
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({shows: responseData.shows, current_user: responseData.current_user});
      });
  }

  handleAddClicked(event) {
    if (this.state.addClicked === false){
      this.setState({addClicked: true});
    } else {
      this.setState({addClicked: false});
    }
  }

  handleNameChange(event) {
    let newName = event.target.value;
    this.setState({ name: newName });
  }

  handleLocationChange(event) {
    let newLocation = event.target.value;
    this.setState({ location: newLocation });
  }

  handleDateChange(event){
    let newDate = event.target.value;
    this.setState({ date: newDate });
  }

  handleTimeChange(event) {
    let newTime = event.target.value;
    this.setState({ time: newTime });
  }

  handleDurationChange(event) {
    let newDuration = parseFloat(event.target.value);
    this.setState({ duration: newDuration });
  }

  handleSlotsChange(event){
    let newSlots = event.target.value;
    this.setState({ slots: newSlots });
  }

  handlePriceChange(event){
    let newPrice = event.target.value;
    this.setState({ price: newPrice });
  }

  handleSubmit(event) {
    event.preventDefault();
    let fetchBody = { name: this.state.name, location: this.state.location,
    duration: this.state.duration, time: this.state.time,
    date: this.state.date, price: this.state.price, slots: this.state.slots, creator: this.state.current_user };
    let newShows = [];
    fetch('/api/v1/shows',
      { method: "POST", credentials: 'same-origin',
      body: JSON.stringify(fetchBody) })
      .then(function(response) {
        newShows = response.json();
        return newShows;
      }).then((response) => this.setState({
        shows: response,
        name: "",
        location: "",
        duration: "",
        time: "",
        date: "",
        price: "",
        slots: 0,
        addClicked: false
      }));
  }

  render() {
    let current_user = this.state.current_user;
    let clicked = this.state.addClicked;
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
      <div className="small-8 group shows" id="show-index">
        <ShowForm
        current_user={current_user}
        handleSubmit={this.handleSubmit}
        handleNameChange={this.handleNameChange}
        handleLocationChange={this.handleLocationChange}
        handleDateChange={this.handleDateChange}
        handleTimeChange={this.handleTimeChange}
        handleDurationChange={this.handleDurationChange}
        handleSlotsChange={this.handleSlotsChange}
        handlePriceChange={this.handlePriceChange}
        handleAddClicked={this.handleAddClicked}
        clicked={clicked}/>
        <h1>Upcoming Shows</h1>
        {shows.reverse()}
        {this.props.children}
      </div>
    );
  }
}

export default ShowsIndexContainer;
