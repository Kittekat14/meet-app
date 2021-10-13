import React, { Component } from "react";
import mockData from "./mockData";

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

    return (
    <div className="event">
      <h1>MeetUp Events</h1>

      {this.state.show &&
      <div className="summary">
        <p className="name">{mockData.summary}</p>
        <p className="startTime">{mockData.start.dateTime}</p>
        <p className="timeZone">{mockData.end.dateTime}</p>
        <p className="location">{mockData.location}</p>
      </div>
      }
      {!this.state.show &&
      <div className="details">
          <p className="name">{mockData.summary}</p>
          <p className="startTime">{mockData.start.dateTime}</p>
          <p className="endTime">{mockData.end.dateTime}</p>
          <p className="timeZone">{mockData.start.timeZone}</p>
          <p className="location">{mockData.location}</p>
          <p className="decription">{mockData.description}</p>
          <p className="organizerEmail">{mockData.organizer.email}</p>
          <p className="status">{mockData.status}</p>
        </div>
      }
      <button type="button" onClick={(e) => this.detailsHandler(e)} className="detailsButton">{this.state.show && "Show Details"}</button>
      <button type="button" onClick={(e) => this.detailsHandler(e)} className="detailsButton">{!this.state.show && "Hide Details"}</button>

    </div>
    )
  }
}

export default Event;