import React from 'react';
import { Link, browserHistory } from 'react-router';

const TeamShow = ({ id, name, location, image_url, users}) => {
  return(
      <div className="team">
        <h1> {name}</h1>
        <h3>Location: {location} </h3>
        <img src={image_url} style={{opacity: '1', width: '30em'}}/>
        <h2>Performers</h2>
        <div className="row small-up-2 medium-up-3 teams">
          {users.map(function(user){
            return <div className="column">
              <div className="card" id="usertile">
                <img  src={user.avatar.url} />
                <div className="card-section">
                  <h1><Link to={`/users/${user.id}`} id="link-text">{user.first_name} {user.last_name}</Link></h1>
                </div>
              </div>
            </div>;
        })}

      </div>
      </div>
    );
  };

export default TeamShow;
