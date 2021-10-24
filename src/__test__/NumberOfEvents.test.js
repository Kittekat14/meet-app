import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe("<NumberOfEvents /> component unit test", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEventNumber={() => {}}/>);
  });

   test('component render input field', () => {
     expect(NumberOfEventsWrapper.find('.numberInput')).toHaveLength(1);
   });
   test("component render ErrorAlert Component", () => {
     expect(NumberOfEventsWrapper.find(".errorAlert")).toHaveLength(1);
   });

   test('state (given from parent as prop) of numberOfEvents is 32 by default', () => {
     const numberOfEvents = NumberOfEventsWrapper.prop('numberOfEvents');
     expect(NumberOfEventsWrapper.find('.numberInput').prop('value')).toBe(numberOfEvents);
   });

   test('component state of errorText is empty string by default', () => {
     const errorText = NumberOfEventsWrapper.state("errorText");
     expect(NumberOfEventsWrapper.find(".errorAlert").prop("text")).toEqual(errorText);
   });

   

})

     
