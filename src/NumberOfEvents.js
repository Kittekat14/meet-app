import React, { Component } from 'react';

class NumberOfEvents extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      eventCounter: 32,
      infoText: ''
    }
  }


  handleInputChange = (event) => {
    const newCounter = event.target.value;
     if (isNaN(newCounter) || newCounter < 1) {
      this.setState({
        eventCounter: newCounter,
        infoText: 'Please write a number',
      })
    } else {
      this.setState({
        eventCounter: newCounter,
        infoText: ''
      });
    }
  }


  render() {

    const { eventCounter, infoText } = this.state;

    return (
      <div>
      <label htmlFor="numberOfEventsInput"> Number of Events on Page:
      <input 
        id="numberOfEventsInput"
        type="text" 
        className="numberInput" 
        value={eventCounter}
        onChange={(value) => this.handleInputChange(value)} />
      </label>
      <p className="infoText">{infoText}</p>
      </div>
    )
  }
}

export default NumberOfEvents;
