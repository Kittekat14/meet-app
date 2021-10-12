import React, { Component } from "react";

class Event extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       show: false 
    }
    this.detailsHandler = this.detailsHandler.bind(this);
  }

  detailsHandler = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  }

  render() {

    const mockData = this.props.mockData;

    return (
    <div className="event">
      <h1>MeetUp Events</h1>

      {this.state.show ?
      <div className="summary">
        <p className="name">{mockData.summary}</p>
        <p className="startTime">{mockData.start}</p>
        <p className="timeZone">{mockData.start.timeZone}</p>
        <p className="location">{mockData.location}</p>
      </div>
      :
      <div className="details">
          <p className="name">{mockData.summary}</p>
          <p className="startTime">{mockData.start}</p>
          <p className="endTime">{mockData.end}</p>
          <p className="timeZone">{mockData.start.timeZone}</p>
          <p className="location">{mockData.location}</p>
          <p className="decription">{mockData.description}</p>
          <p className="organizerEmail">{mockData.organizer.email}</p>
          <p className="status">{mockData.status}</p>
        </div>
      }
      <button onClick={() => this.detailsHandler()} className="detailsButton">{this.state.show ? "Show Details" : "Hide Details"}</button>

    </div>
    )
  }
}

export default Event;