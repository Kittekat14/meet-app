import React, { Component } from 'react';
import './nprogress.css';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from "./api";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      currentLocation: 'all',
    }
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }


  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      let locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);

      locationEvents = locationEvents.slice(0, eventCount)
      this.setState({
        numberOfEvents: locationEvents,
        currentLocation: location
      });
    });
  }


  updateEventCount = (eventCount) => {
    this.setState({
      numberOfEvents: eventCount
    });
    const { currentLocation } = this.state;
    this.updateEvents(currentLocation, eventCount);
  }


  render() {
    
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events}/>
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEventNumber={this.updateEventNumber} />
      </div>
    );
  }
}

export default App;
