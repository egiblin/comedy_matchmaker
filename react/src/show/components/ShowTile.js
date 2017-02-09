import React from 'react';
import { Link } from 'react-router';


const ShowTile = ({ id, name, location, image_url, slots, date, time, duration, creator, price }) => {
    return(
      <div className="w3-card" id="showtile">
        <h1><Link to={`/shows/${id}`} id="link-text"> {name} </Link></h1>
        <h5 id="location-text">Location: {location} </h5>
        <img width="300" height="300" src={image_url} /><br />
        <h4>Slots: {slots} </h4>
      </div>
    );
  };

export default ShowTile;
