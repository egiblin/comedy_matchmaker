import React from 'react';

const ShowForm = props => {
  if (props.clicked){
    return(
      <div className="small-6 blocks">
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
              <select name="duration" onChange={props.handleDurationChange}>
                <option value="0.5">30 minutes</option>
                <option value="1.0">1 hour</option>
                <option value="1.5">1 hour 30 min</option>
                <option value="2.0">2 hours</option>
                <option value="2.5">2 hours 30 min</option>
                <option value="3.0">3 hours</option>
              </select>
            </div>
            <div className="input-field col s3">
              <input type="text" name="price" placeholder="Enter price here..." onChange={props.handlePriceChange}/>
            </div>
            <div className="input-field col s3">
              <input type="date" name="show_date" onChange={props.handleDateChange} />
            </div>
            <div className="input-field col s3">
              <select name="slots" onChange={props.handleSlotsChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
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
