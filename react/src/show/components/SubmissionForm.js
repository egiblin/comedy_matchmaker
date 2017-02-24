import React from 'react';

const SubmissionForm = props => {
  let team_options = props.teams.map(team => {
    return (
      <option value={team.name}>{team.name}</option>
    );
  });
  if (props.clicked){
    return(
        <div className="small-6 blocks" id="submission-form">
            <input id="add_submission" type='submit' value="Actually, Nah Dude" className="small button round" onClick={event => {event.preventDefault(), props.handleAddClicked();}} />
            <form>
              <div className="input-field col s3">
                <select id="improv-dropdown" name="improv-dropdown" value="No">
                  <option value="No">Individual</option>
                  <option value="Yes">Improv Team</option>
                </select>
              </div>
              <div className="input-field col s3">
                <select id="improv-teams-dropdown" name="improv-teams-dropdown">
                  {team_options}
                </select>
              </div>
              <div className="input-field col s3">
                <input type="text" name="pitch" placeholder="Enter pitch here..." onChange={props.handlePitchChange}/>
              </div>
              <div className="row">
                <div className="col s2 offset-s5 center-align">
                  <input id="make_submission" className="small button round" type="submit" value="Add Submission" name="Submit" onClick={props.handleSubmit}/>
                </div>
              </div>
            </form>
        </div>
      );
  } else {
    return(
    <div className="row search">
      <input id="add-article" type='submit' value="Submit" className="small button round" onClick={event => {event.preventDefault(), props.handleAddClicked();}} />
    </div>
  );}
};

export default SubmissionForm;
