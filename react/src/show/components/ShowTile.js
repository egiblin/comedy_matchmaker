import React from 'react';
import { Link } from 'react-router';


const ShowTile = ({ id, name, location, image_url, slots, date, time, duration, creator, price }) => {
    return(
      <div className="small-6 block" id="showtile">
        <h1><Link to={`/shows/${id}`}> {name} </Link></h1>
        <h3>Location: {location} </h3>
        <img src={image_url} />
      </div>
    );
  };

export default ShowTile;
