import React from 'react';
import { Link } from 'react-router';

const SubmissionTile = ({ id, pitch, improv, selected, team, user_ids, user_id, show_admin, handleSelectedChange, handle }) => {
  let name = user_ids[user_id];
  if (show_admin == true && selected == true){
    return(
      <div className="submission">
        <h1><Link to={`/users/${user_id}`} id="link-text">{name} </Link></h1>
        <p id="pitch"> {pitch} </p>
        <form>
          <div className="col s2 offset-s5 center-align">
            <input id="select-submission" className="small button round" type="submit" value="Unselect" name="submission-select" onClick={handleSelectedChange(null, id)}/>
          </div>
        </form>
      </div>
    );
  }
  else if (show_admin == true && selected !== true){
    return(
      <div className="submission">
        <h1><Link to={`/users/${user_id}`} id="link-text">{name} </Link></h1>
        <p id="pitch"> {pitch} </p>
        <form>
          <div className="col s2 offset-s5 center-align">
            <input id="select-submission" className="small button round" type="submit" value="Select" name="submission-select" onClick={handleSelectedChange}/>
          </div>
        </form>
      </div>
    );
  }
  else {
    return(
      <div className="submission">
      <h1><Link to={`/users/${user_id}`} id="link-text">{name} </Link></h1>
      <p id="pitch"> {pitch} </p>
      </div>
    );
  }
};

export default SubmissionTile;
