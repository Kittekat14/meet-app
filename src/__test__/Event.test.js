import React from 'react';
import { shallow } from 'enzyme';
import Event from "../Event";
import mockData from '../mockData';

describe('<Event /> component', () => {
  let EventWrapper;
  let event = mockData[0];
  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });
  test("component should render one event", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });
  test("summary section should be shown by default", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });
  test("name should be shown by default", () => {
    expect(EventWrapper.find(".name")).toHaveLength(1);
  });
  test("location should be shown by default", () => {
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });
  test("starting time should be shown by default", () => {
    expect(EventWrapper.find(".startTime")).toHaveLength(1);
  });
  test("ending time should be shown by default", () => {
    expect(EventWrapper.find(".endTime")).toHaveLength(1);
  });
  test('details section should be collapsed by default', () => {
    expect(EventWrapper.find('.details')).toHaveLength(0);
  });
  test('component\'s show state should be true by default', () => { 
    expect(EventWrapper.state('show')).toBe(true);
  });
  test('component should have a button for showing details', () => { 
    expect(EventWrapper.find('.showDetailsButton')).toHaveLength(1);
  });
  test('component should have a button for hiding details', () => { 
    expect(EventWrapper.find('.hideDetailsButton')).toHaveLength(1);
  });

  test("state of show should be changed when detailsButton is clicked", () => {
    EventWrapper.setState({
      show: true,
    });
    EventWrapper.find(".showDetailsButton").simulate("click");
    expect(EventWrapper.state("show")).toBe(false);
  })

  test("details should then again be hidden when detailsButton clicked", () => {
    EventWrapper.setState({
      show: false,
    });
    EventWrapper.find(".hideDetailsButton").simulate("click");
    expect(EventWrapper.find(".details")).toHaveLength(0);
  });

});