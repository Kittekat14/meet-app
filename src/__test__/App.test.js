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

  test('App passes "events" state as a prop to EventList', () => {
  const AppWrapper = mount(<App />);
  const AppEventsState = AppWrapper.state('events');
  expect(AppEventsState).not.toEqual(undefined);
  expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
  AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
  const AppWrapper = mount(<App />); //first fully rendered to DOM
  const AppLocationsState = AppWrapper.state('locations');
  expect(AppLocationsState).not.toEqual(undefined);
  expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
  AppWrapper.unmount(); // then removed from DOM again
  });

  test('App passes "numberOfEvents" state as a prop to NumberOfEvents', () => {
  const AppWrapper = mount(<App />); // fully rendered to DOM with node's childrens
  const AppEventNumberState = AppWrapper.state('numberOfEvents');
  expect(AppEventNumberState).not.toEqual(undefined);
  expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toEqual(AppEventNumberState);
  AppWrapper.unmount(); // then removed from DOM again
  });

  test('get list of events matching the city selected by the user', async () => {
  const AppWrapper = mount(<App />);
  const CitySearchWrapper = AppWrapper.find(CitySearch);
  const locations = extractLocations(mockData);
  CitySearchWrapper.setState({ suggestions: locations });
  const suggestions = CitySearchWrapper.state('suggestions');
  const selectedIndex = Math.floor(Math.random() * (suggestions.length));
  const selectedCity = suggestions[selectedIndex];
  await CitySearchWrapper.instance().handleItemClicked(selectedCity);
  const allEvents = await getEvents();
  const eventsToShow = allEvents.filter(event => event.location === selectedCity);
  expect(AppWrapper.state('events')).toEqual(eventsToShow);
  AppWrapper.unmount();
  });

  test('get list of all events when user clicks "See all cities"', async () => {
  const AppWrapper = mount(<App />);
  const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
  await suggestionItems.at(suggestionItems.length - 1).simulate('click');
  const allEvents = await getEvents();
  expect(AppWrapper.state('events')).toEqual(allEvents);
  AppWrapper.unmount();
  });

  
  test('user can get a specific number of events when input changes', async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    NumberOfEventsWrapper.instance().handleInputChanged({
      target: { value: 1 },
    });
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(null, 1);
    AppWrapper.unmount();
  });

})

 // AppWrapper.setState({ numberOfEvents: 32 });
    // const eventObject = { target: { value: 10 } };
    // AppWrapper.find(".numberInput").simulate("change", eventObject);
    // const countedEvents = await getEvents();
    // expect(AppWrapper.state('numberOfEvents')).toBe(countedEvents);
