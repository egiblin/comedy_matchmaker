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
      addClicked: false
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
    fetch('/api/v1/shows.json')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({shows: responseData});
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
    let newDuration = event.target.value;
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
    date: this.state.date, price: this.state.price, slots: this.state.slots };
    let newArticles = [];
    fetch('/api/v1/shows',
      { method: "POST",
      body: JSON.stringify(fetchBody) })
      .then(function(response) {
        newArticles = response.json();
        return newArticles;
      }).then((response) => this.setState({
        articles: response,
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
      <div className="shows">
        <ShowForm
        handleSubmit={this.handleSubmit}
        handleTitleChange={this.handleTitleChange}
        handleLocationChange={this.handleLocationChange}
        handleDateChange={this.handleDateChange}
        handleTimeChange={this.handleTimeChange}
        handleDurationChange={this.handleDurationChange}
        handleSlotsChange={this.handleSlotsChange}
        handlePriceChange={this.handlePriceChange}
        handleAddClicked={this.handleAddClicked}
        clicked={clicked}/>
        {shows}
        {this.props.children}
      </div>
    );
  }
}

export default ShowsIndexContainer;
