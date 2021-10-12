import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });
   test('component render input field', () => {
     expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
   });
   test('component state of eventCounter is 32 by default', () => {
     const eventCounter = NumberOfEventsWrapper.state('eventCounter');
     expect(NumberOfEventsWrapper.find('.NumberOfEvents').prop('value')).toBe(eventCounter);
   });

   test('component state of eventCounter should change to input number', () => {
     NumberOfEventsWrapper.setState({
      eventCounter: 32
    });
    const eventObject = { target: { value: 24 }};
    NumberOfEventsWrapper.find('.NumberOfEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventCounter')).toBe(24);
   });

   test('component state of infoText is empty string by default', () => {
     const infoText = NumberOfEventsWrapper.state('infoText');
     expect(NumberOfEventsWrapper.find('.infoText').text('.infoText')).toBe(infoText);
   });

   test('component state of infoText should be empty when number is written', () => {
    NumberOfEventsWrapper.setState({
      infoText: 'Please write a number'
    });
    const eventObject = { target: { value: '' }};
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('infoText')).toBe('');
   });

   test('component state of eventCounter should change to number that\'s set', () => {
    NumberOfEventsWrapper.setState({
      eventCounter: 32,
      infoText: 'Please write a number'
    });
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', 1);
    expect(NumberOfEventsWrapper.state('eventCounter')).toBe(1);
   });
   
})

     
