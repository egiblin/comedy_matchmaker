import React from 'react';
import { Link } from 'react-router';

const TeamShow = ({ id, name, location, image_url}) => {
    return(
      <div className="team">
        <h1> {name}</h1>
        <h3>Location: {location} </h3>
        <img src={image_url} />
      </div>
    );
  };

export default TeamShow;
