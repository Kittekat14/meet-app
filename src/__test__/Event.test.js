import React from 'react';
import { shallow } from 'enzyme';
import Event from "../Event";

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test("summary/name should be shown by default", () => {
    expect(EventWrapper.find(".event .name")).toHaveLength(1);
  });
  test("location should be shown by default", () => {
    expect(EventWrapper.find(".event .location")).toHaveLength(1);
  });
  test("time should be shown by default", () => {
    expect(EventWrapper.find(".event .startTime")).toHaveLength(1);
  });
  test("timezone should be shown by default", () => {
    expect(EventWrapper.find(".event .timeZone")).toHaveLength(1);
  });
  test('details section should be collapsed by default', () => {
    expect(EventWrapper.find('.details')).toHaveLength(0);
  });
  test('components show state should be false by default', () => { 
    expect(EventWrapper.state('show')).toBe(false);
  });
  test('Details should be expanded when clicked on button', () => {
    EventWrapper.setState({
      show: true,
    });
    EventWrapper.find(".detailsButton").simulate("click");
    expect(EventWrapper.find(".details")).toHaveLength(1);
  });
  test("Details should be hidden on click", () => {
    EventWrapper.setState({
      show: false,
    });
    EventWrapper.find(".detailsButton").simulate("click");
    expect(EventWrapper.find(".details")).toHaveLength(0);
  });

 

});