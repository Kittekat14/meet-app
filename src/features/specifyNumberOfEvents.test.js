import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
  
        given('a user hasn’t specified a number of events to show up', () => {
          // all stays the same
        });
        let AppWrapper;
        when('the user does nothing', () => {
          AppWrapper = mount(<App />);
        })
        then('the default number of shown events is 32', () => {
          expect(AppWrapper.state("numberOfEvents")).toBe(32);
        });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;

        given('a list of 32 events is shown to the user', () => {
          AppWrapper = mount(<App />);
          
        });

        when('the user specifies a number', () => {
          const numberOfEvents = { target: { value: 23 } };
          AppWrapper.find(".numberInput").simulate("change", numberOfEvents);
        });

        then('there will be as many events shown as the user has specified', () => {
          const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
          AppWrapper.setState({ numberOfEvents: 23 });
          expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(23);
        });
  });

});