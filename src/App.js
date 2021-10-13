import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import mockData from './mockData';
import { extractLocations } from "./api";

class App extends Component {
  state = {
    events: mockData,
  }

  render() {
    
    return (
      <div className="App">
        <CitySearch locations={extractLocations(mockData)} />
        <EventList events={this.state.events}/>
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;
