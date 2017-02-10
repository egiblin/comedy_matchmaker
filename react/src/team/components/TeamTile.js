import React from 'react';
import { Link } from 'react-router';


const TeamTile = ({ id, name, location, image_url }) => {
    return(
      <div className="column">
        <div className="card" id="showtile">
          <div className="card-divider">
            <h1><Link to={`/teams/${id}`} id="link-text"> {name} </Link></h1>
          </div>
          <img src={image_url} />
          <div className="card-section">
            <p1>Location: {location} </p1>
          </div>
        </div>
      </div>
    );
  };

export default TeamTile;
