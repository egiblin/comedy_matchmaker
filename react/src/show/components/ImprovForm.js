import React from 'react';

const SubmissionForm = props => {
  if (props.clicked){
    return(
        <div className="small-6 blocks">
            <input id="add_submission" type='submit' value="Actually, Nah Dude" className="btn" onClick={event => {event.preventDefault(), props.handleAddClicked();}} />
            <form>
              <div className="input-field col s3">
                <input type="text" name="pitch" placeholder="Enter pitch here..." onChange={props.handlePitchChange}/>
              </div>
              <div className="row">
                <div className="col s2 offset-s5 center-align">
                  <input id="make_submission" className="btn" type="submit" value="Add Submission" name="Submit" onClick={props.handleSubmit}/>
                </div>
              </div>
            </form>
        </div>
      );
  } else {
    return(
    <div className="row search">
      <input id="add-article" type='submit' value="Submit As Individual" className="btn" onClick={event => {event.preventDefault(), props.handleAddClicked();}} />
    </div>
  );}
};

export default SubmissionForm;
