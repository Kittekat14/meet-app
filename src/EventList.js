import React, { Component } from 'react';
import Event from './Event';
import { WarningAlert } from './Alert';

class EventList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       warningText: "This event list was cached and you're currently offline."
    }
  }
  
  render() {
  const { events } = this.props;
    return (
      <div>
        {!navigator.onLine ? 
        <WarningAlert text={this.state.warningText} /> :
        null }

        <ul className="EventList">
          {events.map(event =>
            <li key={event.id}>
              <Event event={event}  />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default EventList;
