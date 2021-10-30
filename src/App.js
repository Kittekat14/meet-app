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

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import EventGenre from './EventGenre';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      locations: [],
      numberOfEvents: undefined,
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
    this.updateEvents(this.state.currentLocation, changedNumber);
  };

  getData = () => {
    const { locations, events } = this.state;

    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length; //each event with a location property is being counted
      const city = location.split(", ").shift(); 
      //takes each location and stops, where , begins ("split"), then takes the first item in array ('shift')
      return { city, number };
    });
    return data; // map function returns new array with filtered and reduced to city (not country) data
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

        <div className="data-vis-wrapper">
          <EventGenre events={this.state.events} />
          <ResponsiveContainer height={400} className="scattered-chart">
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis
                type="number"
                dataKey="number"
                name="number of events"
                allowDecimals={false}
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

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
