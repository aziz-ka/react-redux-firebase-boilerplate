import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import TaskList from '../index';


describe('<TaskList />', () => {
  it('should render task list', () => {
    const wrapper = shallow(<TaskList removeTask={() => {}} tasks={[]} updateTask={() => {}} />);
    const taskItem = wrapper.find('TaskItem');

    expect(taskItem).to.have.length(0);
  });

  it('should update state on input\'s onChange event', () => {
    const wrapper = shallow(<TaskList removeTask={() => {}} tasks={[{}]} updateTask={() => {}} />);
    const taskItem = wrapper.find('TaskItem');

    expect(taskItem).to.have.length(1);
  });
});
