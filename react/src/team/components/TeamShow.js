import React from 'react';
import { Link, browserHistory } from 'react-router';

const TeamShow = ({ id, name, location, image_url, users}) => {
  return(
      <div className="team">
        <h1> {name}</h1>
        <h3>Location: {location} </h3>
        <img src={image_url} />
        <h5>Performers</h5>
        <ul className="small-block-grid-3">
          {users.map(function(user){
            return <div id="usertile"><li key={user.id}><img src={user.avatar.url} /><div id="main-user-button" style={{float: 'left', padding: '1em'}} onClick={() => {
              browserHistory.push('/users/');
            }}>{user.first_name} {user.last_name}
        </div></li></div>;
        })}
      </ul>
      </div>
    );
  };

export default TeamShow;
