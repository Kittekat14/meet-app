import React, { Component } from 'react';
import './nprogress.css';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from "./api";
import logo from './images/MEET2.png';
import WelcomeScreen from './WelcomeScreen';
import { checkToken, getAccessToken } from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      currentLocation: "all",
      showWelcomeScreen: undefined,
    };
  }

  async componentDidMount() {
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if (code || isTokenValid) {
      getEvents().then((events) => { 
        this.setState({ events, locations: extractLocations(events) });
      });
    }
  }

  updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);

      const eventsToShow = locationEvents.slice(0, numberOfEvents);
        this.setState({
          events: eventsToShow,
          currentLocation: location,
        });
    });
  };

  updateEventNumber = (changedNumber) => {
    this.setState({ numberOfEvents: changedNumber });
    this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;

    return (
      <div className="App">
        <img src={logo} alt="Logo" width="250" />

        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />

        <EventList events={this.state.events} />
        
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEventNumber={(value) => this.updateEventNumber(value)}
        />

        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => getAccessToken()}
        />
      </div>
    );
  }
}

export default App;
