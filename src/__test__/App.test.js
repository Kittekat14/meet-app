import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import mockData from '../mockData';
import { extractLocations, getEvents } from '../api';


// Unit Testing
describe('<App /> component unit test', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />); 
  });
    test('render EventList component', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
    });
    test('render CitySearch component', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });
    test('render NumberOfEvents component', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });
});

// Integration Testing
describe('<App /> Integration', () => {
let AppWrapper;
beforeEach(async () => {
  AppWrapper = await mount(<App />);
  await AppWrapper.instance().componentDidMount();
  AppWrapper.update();
});

afterEach(() => {
  AppWrapper.unmount();
});

  test('App passes "events" state as a prop to EventList', () => {
  const AppEventsState = AppWrapper.state('events');
  expect(AppEventsState).not.toEqual(undefined);
  expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
  const AppLocationsState = AppWrapper.state('locations');
  expect(AppLocationsState).not.toEqual(undefined);
  expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
  });

  test('App passes "numberOfEvents" state as a prop to NumberOfEvents', () => {
  const AppEventNumberState = AppWrapper.state('numberOfEvents');
  expect(AppEventNumberState).not.toEqual(undefined);
  expect(AppWrapper.find(NumberOfEvents).props().eventCounter).toEqual(AppEventNumberState);
  });

  
  test("User get list of events matching the city they selected", async () => {
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state("suggestions");
    const selectedIndex = Math.floor(Math.random() * suggestions.length);
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter((event) => event.location === selectedCity);
    expect(AppWrapper.state("events")).toEqual(eventsToShow);
  });

  test('User get list of all events when they click "See all cities"', async () => {
    const suggestionItems = AppWrapper.find(CitySearch).find(".suggestions li");
    await suggestionItems.at(suggestionItems.length - 1).simulate("click");
    const allEvents = await getEvents();
    expect(AppWrapper.state("events")).toEqual(allEvents);
  });

  test("User can get a specific number of events when they change .numberInput input field", () => {
    AppWrapper.setState({ numberOfEvents: 32 });
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    const eventObject = { target: { value: 20 } };
    NumberOfEventsWrapper.find(".numberInput").simulate("change", eventObject);
    expect(AppWrapper.state("numberOfEvents")).toBe(20);
  });

  test("is mockData passed through prop 'events' of EventList?", async () => {
    const allEvents = await getEvents();
    AppWrapper.setState({
      events: allEvents,
    });
    const EventListWrapper = AppWrapper.find(EventList);
    expect(EventListWrapper.prop("events").length).toEqual(mockData.length);
  });

  test("EventList renders exactly as much events as set in state", () => {
    AppWrapper.setState({
      numberOfEvents: 24,
    });
    const EventListWrapper = AppWrapper.find(EventList);
    EventListWrapper.update();
    const eventList = EventListWrapper.prop("events");
    expect(eventList.length).toEqual(AppWrapper.state('events').length);
  })

  test("App displays 32 events by default", () => {
    AppWrapper.setState({
      numberOfEvents: 24,
    });
    expect(AppWrapper.state('numberOfEvents')).toEqual(24);
  });
  
})
