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
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }


  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);

       const { numberOfEvents } = this.state;

      this.setState({
        events: locationEvents.slice(0, numberOfEvents)
      });
    });
  }


  updateEventNumber = (eventNumber) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventNumber
    });
    this.updateEvents(currentLocation, eventNumber);
  }


  render() {
    
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events}/>
        <NumberOfEvents updateEventNumber={this.updateEventNumber} />
      </div>
    );
  }
}

export default App;
