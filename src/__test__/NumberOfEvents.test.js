import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe("<NumberOfEvents /> component unit test", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

   test('component render input field', () => {
     expect(NumberOfEventsWrapper.find('.numberInput')).toHaveLength(1);
   });
   test('component render infoText paragraph', () => {
     expect(NumberOfEventsWrapper.find('.infoText')).toHaveLength(1);
   });

   test('component state of eventCounter is 32 by default', () => {
     const eventCounter = NumberOfEventsWrapper.state('eventCounter');
     expect(NumberOfEventsWrapper.find('.numberInput').prop('value')).toBe(eventCounter);
   });
   test('component state of infoText is empty string by default', () => {
     const infoText = NumberOfEventsWrapper.state('infoText');
     expect(NumberOfEventsWrapper.find('.infoText').text('.infoText')).toBe(infoText);
   });


   test('component state of infoText should be empty when number is written', () => {
    NumberOfEventsWrapper.setState({
      infoText: 'Please write a number'
    });
    const eventObject = { target: { value: 'Please write a number' }};
    NumberOfEventsWrapper.find('.numberInput').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('infoText')).toBe('Please write a number');
   });

   test('component state of eventCounter should change to input number', () => {
    const inputNumber = { target: { value: 24 }};
    NumberOfEventsWrapper.find('.numberInput').simulate('change', inputNumber);
    expect(NumberOfEventsWrapper.state('eventCounter')).toBe(24);
   });

   test('component state of eventCounter should change to number that\'s set', () => {
    let setNumber = { target: { value: 2 }}
    NumberOfEventsWrapper.find('.numberInput').simulate('change', setNumber);
    expect(NumberOfEventsWrapper.state('eventCounter')).toBe(2);
   });



})

     
