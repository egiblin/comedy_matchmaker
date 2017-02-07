import React from 'react';
import { Link } from 'react-router';

const ShowShow = ({ id, name, location, image_url, slots, date, time, duration, creator, price }) => {
    return(
      <div className="show">
        <h1> {name}</h1>
        <h3>Location: {location} </h3>
        <img src={image_url} />
      </div>
    );
  };

export default ShowShow;
