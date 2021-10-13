import React from 'react';
import { shallow } from 'enzyme';
import Event from "../Event";

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
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
  test("time should be shown by default", () => {
    expect(EventWrapper.find(".startTime")).toHaveLength(1);
  });
  test("timezone should be shown by default", () => {
    expect(EventWrapper.find(".timeZone")).toHaveLength(1);
  });
  test('details section should be collapsed by default', () => {
    expect(EventWrapper.find('.details')).toHaveLength(0);
  });
  test('component\'s show state should be false by default', () => { 
    expect(EventWrapper.state('show')).toBe(false);
  });
  test('component should have 2 hide/show buttons', () => { 
    expect(EventWrapper.find('.detailsButton')).toHaveLength(2);
  });

  test("state of show should be changed when detailsButton-show is clicked", () => {
    EventWrapper.setState({
      show: false,
    });
    EventWrapper.find(".detailsButton").at[0].simulate("click");
    expect(EventWrapper.state("show")).toBe(true);
  })

  test('details should be expanded when detailsButton-hide is clicked', () => {
    EventWrapper.setState({
      show: true,
    });
    EventWrapper.find(".detailsButton").at[1].simulate("click");
    expect(EventWrapper.state("show")).toBe(false);
  });

  test("details should then again be hidden when detailsButton clicked", () => {
    EventWrapper.setState({
      show: false,
    });
    EventWrapper.find(".detailsButton").at[1].simulate("click");
    expect(EventWrapper.find(".details")).toHaveLength(0);
  });

});