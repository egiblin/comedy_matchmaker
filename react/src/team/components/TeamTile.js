import React from 'react';
import { Link } from 'react-router';


const TeamTile = ({ id, name, location, image_url }) => {
    return(
      <div className="team">
        <h1><Link to={`/teams/${id}`}> {name} </Link></h1>
        <h3>Location: {location} </h3>
        <img src={image_url} />
      </div>
    );
  };

export default TeamTile;
