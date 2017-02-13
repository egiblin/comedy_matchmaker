import React from 'react';
import { Link } from 'react-router';

const ShowShow = ({ id, name, location, image_url, slots, date, time, duration, creator, price }) => {
    return(
      <div className="show-container">
        <div className="show">
          <img src={image_url} />
        </div>
        <div className="show-info">
          <h1> {name}</h1>
          <h3>Location: {location} </h3>
          <h3>Open Slots: {slots} </h3>
        </div>
      </div>
    );
  };

export default ShowShow;
