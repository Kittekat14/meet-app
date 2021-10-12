import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
   eventCounter: 32,
   infoText: ''
  }

  handleInputChange = (event) => {
     if (isNaN(event.target.value) || event.target.value < 1) {
      this.setState({
        eventCounter: event.target.value,
        infoText: "Please write a number"
      });
    } else {
      this.setState({
        eventCounter: event.target.value,
        infoText: ""
      });
    }
  }

  render() {
    return (
      <div>
      <label htmlFor="NumberOfEventsInput"> Number of Events on Page:
      <input 
        id="NumberOfEventsInput"
        type="text" 
        className="NumberOfEvents" 
        value={this.state.eventCounter} 
        onChange={(event) => this.handleInputChange(event)} />
      </label>
      <p className="infoText">{this.state.infoText}</p>
      </div>
    )
  }
}

export default NumberOfEvents;
