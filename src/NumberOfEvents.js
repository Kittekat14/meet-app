import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
   eventCounter: 32,
   infoText: ''
  }

  handleInputChange = (event) => {
    const value = event.target.value;
     if (isNaN(value) || value < 1) {
      this.setState({
        eventCounter: 32,
        infoText: "Please write a number",
      });
    } else {
      this.setState({
        eventCounter: value,
        infoText: ''
      });
    }
  }

  render() {
    return (
      <div>
      <label htmlFor="numberOfEventsInput"> Number of Events on Page:
      <input 
        id="numberOfEventsInput"
        type="text" 
        className="numberOfEvents" 
        value={this.state.eventCounter}
        onChange={(value) => this.handleInputChange(value)} />
      </label>
      <p className="infoText">{this.state.infoText}</p>
      </div>
    )
  }
}

export default NumberOfEvents;
