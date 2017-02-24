import React from 'react';
import { Link } from 'react-router';

const UserShow = ({ id, first_name, last_name, image_url, teams, handleTeamAdd, handleSubmit }) => {
    let name = first_name + " " + last_name;
    let team_options = teams.map(team => {
      return (
        <option value={team.name}>{team.name}</option>
      );
    });
    return(
      <div className="user" id="user-show-id">
        <h1> {name}</h1>
        <img src={image_url} style={{opacity: '1', width: '30em'}}/>
        <div className="input-field col s3">
          <h3>Add Team</h3>
          <select id="teamadd" name="team_add" onChange={handleTeamAdd}>
            <option value="Individual">As Individual</option>
            {team_options}
          </select>
          <div className="row search">
            <input id="add-user-team" type='submit' value="Add New Team" className="small button round" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    );
  };

export default UserShow;
