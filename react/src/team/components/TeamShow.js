import React from 'react';
import { Link, browserHistory } from 'react-router';

const TeamShow = ({ id, name, location, image_url, users}) => {
  let userLength = users.length;
  let userTiles = [];
  userTiles = users.map(function(user){
    if (userTiles.length == 0){
      return(
        <li className="orbit-slide is-active">
          <img className="orbit-image" src={user.avatar.url} alt="Performer" />
          <figcaption className="orbit-caption">
          <Link to={`/users/${user.id}`} id="link-text">{user.first_name} {user.last_name}</Link>
          </figcaption>
        </li>
      );
    } else {
      return(
        <li className="orbit-slide">
          <img className="orbit-image" src={user.avatar.url} alt="Performer" />
          <figcaption className="orbit-caption">
          <Link to={`/users/${user.id}`} id="link-text">{user.first_name} {user.last_name}</Link>
          </figcaption>
        </li>
      );
    }
  });
  return(
      <div className="team">
        <h1> {name}</h1>
        <h3>Location: {location} </h3>
        <img src={image_url} />
        <h5>Performers</h5>
        <div className="orbit" role ="region" data>
          <ul className="orbit-container">
            <button className="orbit-previous"><span className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
            <button className="orbit-next"><span className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
              {users.map(function(user){
                return(
                  <li className="orbit-slide">
                    <img className="orbit-image" src={user.avatar.url} alt="Performer" />
                    <figcaption className="orbit-caption">
                    <Link to={`/users/${user.id}`} id="link-text">{user.first_name} {user.last_name}</Link>
                    </figcaption>
                  </li>
              );
            })}
          </ul>
          {userTiles}
        </div>
      </div>
    );
  };

export default TeamShow;
