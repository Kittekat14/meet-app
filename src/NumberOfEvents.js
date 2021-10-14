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
        eventCounter: '',
        infoText: 'Please write a number',
      })
    } else {
      this.setState({
        eventCounter: newCounter,
        infoText: ''
      });
    };
    this.props.updateEventList(newCounter);
    
  }


  render() {

    const { eventCounter, infoText } = this.state;

    return (
      <div>
      <label htmlFor="numberOfEventsInput"> Number of Events on Page:
      <input 
        id="numberOfEventsInput"
        type="number" 
        className="numberInput" 
        value={eventCounter}
        onChange={this.handleInputChange} />
      </label>
      <p className="infoText">{infoText}</p>
      </div>
    )
  }
}

export default NumberOfEvents;
