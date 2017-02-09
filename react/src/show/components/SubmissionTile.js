import React from 'react';
import { Link } from 'react-router';

const SubmissionTile = ({ id, pitch, improv, selected, team, user_ids, user_id }) => {
    let name = user_ids[user_id];
    return(
      <div className="submission">
      <h1><Link to={`/users/${user_id}`} id="link-text">{name} </Link></h1>
      <p2> {pitch} </p2>
      </div>
    );
  };

export default SubmissionTile;
