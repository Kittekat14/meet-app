import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import mockData from '../mockData';
import EventList from '../EventList';
import Event from '../Event';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  let AppWrapper;
  let EventListWrapper;
  let EventWrapper;

  test('An event element is collapsed by default', ({ given, when, then }) => {

    given('the user hasn’t expanded an event to see its details', () => {
      
    });
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = shallow(<Event event={mockData[0]} />);
    });
    then('the user should see a list of all the events without details', () => {
      expect(EventWrapper.find(".details")).toHaveLength(0);
      expect(EventWrapper.find(".summary")).toHaveLength(1);
    });

  });


  test('User can expand an event to see its details', ({ given, when, then }) => {
    
    given('a user has found an event which he wants to read more about', () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = shallow(<Event event={mockData[0]} />);
    });
    when('the user clicks on the show details button of said element', () => {
      EventWrapper.find('.showDetailsButton').simulate('click');
    });
    then('the event\'s details expand', () => {
      expect(EventWrapper.find(".details")).toHaveLength(1);
    });
      
  });        
     
  test('User can collapse an event to hide its details', ({ given, when, then }) => {

    given('the user has read details about an event he wanted to know more about', () => {
      expect(EventWrapper.find('.details')).toHaveLength(1);
    });
    when('the user clicks on the hide details button of said element', () => {
      EventWrapper.find('.hideDetailsButton').simulate('click');
    });
    then('the event details collapse', () => {
      expect(EventWrapper.find('.details')).toHaveLength(0);
    });

  });
  

});