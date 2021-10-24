import React, { Component } from 'react';
import './nprogress.css';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from "./api";
import logo from './images/MEET2.png';

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


   updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);

      const eventsToShow = locationEvents.slice(0, numberOfEvents);
      if (this.mounted) {
        this.setState({
          events: eventsToShow,
          currentLocation: location
        });
      }
    });
  };


  updateEventNumber = (changedNumber) => {
    this.setState({ numberOfEvents: changedNumber });
    this.updateEvents(this.state.currentLocation, changedNumber);
  }

  render() {
    
    return (
      <div className="App">
        <img src={logo} alt="Logo" width="250"/>

        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events}/>
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEventNumber={(value) => this.updateEventNumber(value)} />
      </div>
    );
  }
}

export default App;
