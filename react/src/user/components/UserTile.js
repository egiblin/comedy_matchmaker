import React from 'react';
import { Link } from 'react-router';


const UserTile = ({ id, first_name, last_name, image_url }) => {
  let name = first_name + " " + last_name;
    return(
      <div className="column">
        <div className="card" id="usertile">
          <img  src={image_url} />
          <div className="card-section">
            <h1><Link to={`/users/${id}`} id="link-text">{name} </Link></h1>
          </div>
        </div>
      </div>
    );
  };

export default UserTile;
