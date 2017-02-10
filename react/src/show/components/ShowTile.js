import React from 'react';
import { Link } from 'react-router';


const ShowTile = ({ id, name, location, image_url, slots, date, time, duration, creator, price }) => {
    return(
      <div className="column">
        <div className="card" id="showtile">
          <div className="card-divider">
            <h1><Link to={`/shows/${id}`} id="link-text"> {name} </Link></h1>
          </div>
          <img width="300" height="300" src={image_url} /><br />
          <div className="card-section">
            <p3 id="location-text">Location: {location} </p3><br />
            <p4>Open Slots: {slots} </p4>
          </div>
        </div>
      </div>
    );
  };

export default ShowTile;
