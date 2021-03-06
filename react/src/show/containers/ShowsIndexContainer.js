import React, { Component } from 'react';
import ShowTile from '../components/ShowTile';
import ShowForm from '../components/ShowForm';
import { Link } from 'react-router';

class ShowsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      user_shows: [],
      name: "",
      location: "",
      duration: 0,
      time: "",
      date: "",
      price: "",
      slots: 0,
      show_photo: "",
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
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSlotsChange = this.handleSlotsChange.bind(this);
    this.handleAddClicked = this.handleAddClicked.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/shows.json', {credentials: 'same-origin'})
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({shows: responseData.shows, current_user: responseData.current_user, user_shows: responseData.user_shows});
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

  handleImageChange(event) {
    let newImage = event.target.value;
    this.setState({ show_photo: newImage });
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
    let creator_name = (this.state.current_user.first_name + " " + this.state.current_user.last_name);
    let fetchBody = { name: this.state.name, location: this.state.location,
    duration: this.state.duration, time: this.state.time, show_photo: this.state.show_photo,
    date: this.state.date, price: this.state.price, slots: this.state.slots, creator: creator_name };
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
        duration: 0,
        time: "",
        date: "",
        price: "",
        slots: 0,
        show_photo: "",
        addClicked: false
      }));
  }

  render() {
    let current_user = this.state.current_user;
    let clicked = this.state.addClicked;
    let user_shows =[];
    if (current_user !== undefined && current_user !== null){
      user_shows = this.state.user_shows.map(show => {
        return(
          <ShowTile
            key={show.id}
            id={show.id}
            name={show.name}
            location={show.location}
            image_url={show.show_photo}
            slots={show.slots}
            date={show.date}
            time={show.time}
            duration={show.duration}
            creator={show.creator}
            price={show.price}
          />
        );
      });
    }
    let shows = this.state.shows.map(show => {
      return(
        <ShowTile
          key={show.id}
          id={show.id}
          name={show.name}
          location={show.location}
          image_url={show.show_photo}
          slots={show.slots}
          date={show.date}
          time={show.time}
          duration={show.duration}
          creator={show.creator}
          price={show.price}
        />
      );
    });
    if (current_user !== undefined && current_user !== null) {
      return(
        <div>
        <div className="row small-up-2 medium-up-3 shows" id="show-index">
          <br />
          <ShowForm
          current_user={current_user}
          handleSubmit={this.handleSubmit}
          handleNameChange={this.handleNameChange}
          handleLocationChange={this.handleLocationChange}
          handleDateChange={this.handleDateChange}
          handleImageChange={this.handleImageChange}
          handleTimeChange={this.handleTimeChange}
          handleDurationChange={this.handleDurationChange}
          handleSlotsChange={this.handleSlotsChange}
          handlePriceChange={this.handlePriceChange}
          handleAddClicked={this.handleAddClicked}
          clicked={clicked}/>
          <h1 className="indextitle">Your Upcoming Shows</h1>
        <div className="row small-up-2 medium-up-3 shows" id="show-index">
          {user_shows}
          </div>
        </div>
        <div className="row small-up-2 medium-up-3 shows" id="show-index">
          <h1 className="indextitle">All Upcoming Shows</h1>
          {shows.reverse()}
          {this.props.children}
        </div>
        </div>
      );
    } else {
      return(
        <div>
          <div className="row small-up-2 medium-up-3 shows" id="show-index">
            <h1 className="indextitle">All Upcoming Shows</h1>
            {shows.reverse()}
            {this.props.children}
          </div>
        </div>
      );
    }
  }
}

export default ShowsIndexContainer;
