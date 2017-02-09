import React from 'react';
import { Link } from 'react-router';


const TeamTile = ({ id, name, location, image_url }) => {
    return(
      <div className="w3-card" id="teamtile">
        <h1><Link to={`/teams/${id}`} id="link-text"> {name} </Link></h1>
        <h3>Location: {location} </h3>
        <img src={image_url} />
      </div>
    );
  };

export default TeamTile;
