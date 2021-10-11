import React, { Component } from "react";

class Event extends Component {
  state = {
    show: false 
  }

  detailsHandler = (event) => {
    this.setState({ show: true })
  }

  render() {
  const { show } = this.state;
  const { mockData } = this.props;

    return (
    <div>
      <h1>MeetUp Events</h1>

      {show ?
      <div className="event">
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
      <button value={show} onClick={(event) => this.detailsHandler(event)} className="detailsButton">{show ? "Show Details" : "Hide Details"}</button>

    </div>
    )
  }
}

export default Event;