import React, { Component } from "react";

class Event extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       show: false
    }
    this.detailsHandler = this.detailsHandler.bind(this);
  }

  detailsHandler = (e) => {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    
    const { event } = this.props;

    return (
    <div className="event">
      <h1>MeetUp Events</h1>

      {this.state.show &&
      <div className="summary">
        <p className="name">{event.summary}</p>
        <p className="startTime">{event.start.dateTime}</p>
        <p className="location">{event.location}</p>
      </div>
      }
      {!this.state.show &&
      <div className="details">
          <p className="name">{event.summary}</p>
          <p className="startTime">{event.start.dateTime}</p>
          <p className="timeZone">{event.start.timeZone}</p>
          <p className="location">{event.location}</p>
          <p className="decription">{event.description}</p>
        </div>
      }
      <button type="button" onClick={(e) => this.detailsHandler(e)} className="detailsButton">{this.state.show && "Show Details"}</button>
      <button type="button" onClick={(e) => this.detailsHandler(e)} className="detailsButton">{!this.state.show && "Hide Details"}</button>

    </div>
    )
  }
}

export default Event;