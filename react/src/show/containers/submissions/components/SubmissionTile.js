import React from 'react';
import { Link } from 'react-router';

const SubmissionTile = ({ id, name, pitch, improv, selected, team, user_id, show_admin, handleSelectedChange, handle }) => {
  if (show_admin == true && selected == true){
    return(
      <div className="submission">
        <h1><Link to={`/users/${user_id}`} id="link-text">{name} </Link></h1>
        <p2> {pitch} </p2>
        <form>
          <div className="col s2 offset-s5 center-align">
            <input id="selected-submission" className="small button round" type="submit" value="Unselect" name="submission-select"/>
          </div>
        </form>
      </div>
    );
  }
  else if (show_admin == true && selected !== true){
    return(
      <div className="submission">
        <h1><Link to={`/users/${user_id}`} id="link-text">{name} </Link></h1>
        <p2> {pitch} </p2>
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
      <p2> {pitch} </p2>
      </div>
    );
  }
};

export default SubmissionTile;
