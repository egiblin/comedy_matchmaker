import React from 'react';

const ShowForm = props => {
  if (props.clicked){
    return(
      <div className="row search">
          <input id="add_show" type='submit' value="Actually, Nah Dude" className="btn" onClick={event => {event.preventDefault(), props.handleAddClicked();}} />
          <form>
            <div className="input-field col s3">
              <input type="text" name="name" placeholder="Enter name here..." onChange={props.handleNameChange}/>
            </div>
            <div className="input-field col s3">
              <input type="text" name="location" placeholder="Enter location here..." onChange={props.handleLocationChange}/>
            </div>
            <div className="input-field col s3">
              <input type="time" name="time" onChange={props.handleTimeChange}/>
            </div>
            <div className="input-field col s3">
              <input type="text" name="duration" placeholder="Enter show duration here..." onChange={props.handleDurationChange}/>
            </div>
            <div className="input-field col s3">
              <input type="text" name="price" placeholder="Enter price here..." onChange={props.handlePriceChange}/>
            </div>
            <div className="input-field col s3">
              <input type="date" name="show_date" onChange={props.handleDateChange} />
            </div>
            <div className="input-field col s3">
              <input type="text" name="slots" placeholder="How many open slots?" onChange={props.handleSlotsChange}/>
            </div>
            <div className="row">
              <div className="col s2 offset-s5 center-align">
                <input id="make_show" className="btn" type="submit" value="Add Show" name="Submit" onClick={props.handleSubmit}/>
              </div>
            </div>
          </form>
      </div>
    );
  } else {
    return(
    <div className="row search">
      <input id="add-article" type='submit' value="Add New Show" className="btn" onClick={event => {event.preventDefault(), props.handleAddClicked();}} />
    </div>
  );}
};

export default ShowForm;
