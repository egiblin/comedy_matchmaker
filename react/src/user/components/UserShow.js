import React from 'react';
import { Link } from 'react-router';

const UserShow = ({ id, first_name, last_name, image_url }) => {
    let name = first_name + " " + last_name;
    return(
      <div className="user">
        <h1> {name}</h1>
        <img src={image_url} />
        <form>
          Add Teams
          <input type="search" name="teamsearch" />
        </form>
      </div>
    );
  };

export default UserShow;
