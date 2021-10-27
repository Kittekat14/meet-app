import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: ''
    }
  }

handleInputChanged = (event) => {
  const value = event.target.value;
  if (isNaN(value) || value < 0 || value === 0) {
    return this.setState({
      errorText: 'Please write a number bigger than 0',
    })
  } else if (value > 32) {
    return this.setState({
      errorText: 'Please select a number from 1 to 32',
    })
  } else {
    return this.setState({
      numberOfEvents: value,
      errorText: '',
    });
    this.props.updateEventNumber(value);
  }; 
}

  render() {
    return (
      <div className="EventNumberComponent">

      <label htmlFor="numberOfEventsInput"> Number of Events on Page:
      <input 
        id="numberOfEventsInput"
        type="number" 
        className="numberInput" 
        value={this.props.numberOfEvents}
        onChange={(event) => this.handleInputChanged(event)} />
      </label>

      <ErrorAlert className="errorAlert" text={this.state.errorText} />
      
      </div>
    )
  }
}

export default NumberOfEvents;
