import React from 'react';
import { Link } from 'react-router';


const UserTile = ({ id, first_name, last_name, image_url }) => {
  let name = first_name + " " + last_name;
    return(
      <div className="w3-card" id="usertile">
        <h1><Link to={`/users/${id}`} id="link-text">{name} </Link></h1>
        <img  src={image_url} />
      </div>
    );
  };

export default UserTile;
