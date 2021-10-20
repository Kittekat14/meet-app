import React, { Component } from "react";

class Event extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       show: true
    }
    
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
      <h3>{event.summary}</h3>
      {this.state.show &&
      <div className="summary">
        <p className="name">{event.summary}</p>
        <p className="startTime"><span className="timeLabel">From:</span> 
        {new Date(event.start.dateTime).toString().slice(4, 21)} ({event.start.timeZone})</p>
        <p className="endTime"><span className="timeLabel">To:</span> 
        {new Date(event.end.dateTime).toString().slice(4, 21)} ({event.end.timeZone})</p>
        <p className="location">{event.location}</p>
      </div>
      }
      {!this.state.show &&
      <div className="details">
        <p className="name">{event.summary}</p>
        <p className="startTime"><span className="timeLabel">From:</span> 
        {new Date(event.start.dateTime).toString().slice(4, 21)} ({event.start.timeZone})</p>
        <p className="endTime"><span className="timeLabel">To:</span> 
        {new Date(event.end.dateTime).toString().slice(4, 21)} ({event.end.timeZone})</p>
        <p className="location">{event.location}</p>
        <p className="decription">{event.description}</p>
        <p className="organizerEmail">@{event.organizer.email}</p>
        <p className="status">{event.status}</p>
      </div>
      }
      {this.state.show &&
      <button type="button" onClick={(e) => this.detailsHandler(e)} className="showDetailsButton button">Show Details</button>}
      {!this.state.show &&
      <button type="button" onClick={(e) => this.detailsHandler(e)} className="hideDetailsButton button">Hide Details</button>}

    </div>
    )
  }
}

export default Event;