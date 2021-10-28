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
     const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
     expect(NumberOfEventsWrapper.find('.numberInput').prop('value')).toBe(numberOfEvents);
   });

   test('component state of errorText is empty string by default', () => {
     const errorText = NumberOfEventsWrapper.state("errorText");
     expect(NumberOfEventsWrapper.find(".errorAlert").prop("text")).toEqual(errorText);
   });

   test('negative number in numberInput changes errorText', () => {
     NumberOfEventsWrapper.setState({
        numberOfEvents: 32
      });
      const eventObject = { target: { value: -4 }};
      NumberOfEventsWrapper.find('.numberInput').simulate('change', eventObject); 
      expect(NumberOfEventsWrapper.state('errorText')).toBe('Please write a number bigger than 0');
   })
   test('number over 32 in numberInput changes errorText', () => {
     NumberOfEventsWrapper.setState({
        numberOfEvents: 32
      });
      const eventObject = { target: { value: 88 }};
      NumberOfEventsWrapper.find('.numberInput').simulate('change', eventObject); 
      expect(NumberOfEventsWrapper.state("errorText")).toBe("Please select a number from 1 to 32");
   })

})

     
