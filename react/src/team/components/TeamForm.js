import React from 'react';

const TeamForm = props => {
  if (props.clicked){
    return(
      <div className="row search">
          <input id="add_team" type='submit' value="Actually, Nah Dude" className="btn" onClick={event => {event.preventDefault(), props.handleAddClicked();}} />
          <form>
            <div className="input-field col s3">
              <input type="text" name="name" placeholder="Enter name here..." onChange={props.handleNameChange}/>
            </div>
            <div className="input-field col s3">
              <input type="text" name="location" placeholder="Enter location here..." onChange={props.handleLocationChange}/>
            </div>
            <div className="row">
              <div className="col s2 offset-s5 center-align">
                <input id="make_show" className="btn" type="submit" value="Add Team" name="Submit" onClick={props.handleSubmit}/>
              </div>
            </div>
          </form>
      </div>
    );
  } else {
    return(
    <div className="row search">
      <input id="add-article" type='submit' value="Add New Team" className="btn" onClick={event => {event.preventDefault(), props.handleAddClicked();}} />
    </div>
  );}
};

export default TeamForm;
