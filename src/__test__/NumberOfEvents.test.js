import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });
   test('component has input field', () => {
     expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
   });
   test('component state of eventCounter is at 32 by default', () => {
     const eventCounter = NumberOfEventsWrapper.state('eventCounter');
     expect(NumberOfEventsWrapper.find('.NumberOfEvents').prop('value')).toBe(eventCounter);
   });
})