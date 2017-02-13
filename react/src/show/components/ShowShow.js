import React from 'react';
import { Link } from 'react-router';

const ShowShow = ({ id, name, location, image_url, slots, date, time, duration, creator, price }) => {
    return(
      <div className="row">
        <div className="small-6 columns">
          <div className="show panel">
            <img src={image_url} id="user-show-photo"/>
          </div>
        </div>
        <div className="show-info small-6 columns">
          <h1> {name}</h1>
          <h3>Location: {location} </h3>
          <h3>Open Slots: {slots} </h3>
        </div>
      </div>

    );
  };

export default ShowShow;
