import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import TaskItem from '../index';
import styles from '../styles.scss';


describe('<TaskItem />', () => {
  it('should render task item', () => {
    const wrapper = shallow(<TaskItem removeTask={() => {}} task={{}} updateTask={() => {}} />);

    expect(wrapper.find('li')).to.have.length(1);
    expect(wrapper.find(`.${styles.taskItemTitle}`)).to.have.length(1);
    expect(wrapper.find(`.${styles.taskItemInput}`)).to.have.length(0);
    expect(wrapper.find('Button')).to.have.length(4);
    expect(wrapper.state('editing')).to.be.false;
  });

  it('should render task item with a passed in title', () => {
    const wrapper = shallow(<TaskItem removeTask={() => {}} task={{title: 'test title'}} updateTask={() => {}} />);

    expect(wrapper.find('li')).to.have.length(1);
    expect(wrapper.find(`.${styles.taskItemTitle}`)).to.have.length(1);
    expect(wrapper.find(`.${styles.taskItemInput}`)).to.have.length(0);
    expect(wrapper.find('Button')).to.have.length(4);
    expect(wrapper.state('editing')).to.be.false;
    expect(wrapper.instance().props.task.title).to.eql('test title');
  });

  it('should render task item\'s title input', () => {
    const wrapper = shallow(<TaskItem removeTask={() => {}} task={{title: 'test title'}} updateTask={() => {}} />);
    wrapper.setState({editing: true});

    expect(wrapper.find('li')).to.have.length(1);
    expect(wrapper.find(`div.${styles.taskItemTitle}`)).to.have.length(0);
    expect(wrapper.find(`input.${styles.taskItemInput}`)).to.have.length(1);
    expect(wrapper.find('Button')).to.have.length(4);
    expect(wrapper.state('editing')).to.be.true;
    expect(wrapper.instance().props.task.title).to.eql('test title');
  });

  it('should mark item completed and update state', () => {
    const wrapper = shallow(<TaskItem removeTask={() => {}} task={{completed: true}} updateTask={() => {}} />);

    expect(wrapper.find(`[data-test-id='remove-button']`)).to.have.length(1);
    expect(wrapper.find(`li.${styles.taskItemCompleted}`)).to.have.length(1);
  });

  it('should edit item and update state', () => {
    const wrapper = shallow(<TaskItem removeTask={() => {}} task={{}} updateTask={() => {}} />);

    wrapper.find(`[data-test-id='edit-button']`).simulate('click');
    expect(wrapper.state('editing')).to.be.true;
  });

  it('should stop editing item and update state', () => {
    const wrapper = shallow(<TaskItem removeTask={() => {}} task={{}} updateTask={() => {}} />);

    wrapper.find(`[data-test-id='stop-edit-button']`).simulate('click');
    expect(wrapper.state('editing')).to.be.false;
  });

  it('should remove item and update state', () => {
    const wrapper = shallow(<TaskItem removeTask={() => {}} task={{}} updateTask={() => {}} />);

    expect(wrapper.find(`[data-test-id='remove-button']`)).to.have.length(1);
  });

  it('should stop editing item and update state on pressing Esc key', () => {
    const wrapper = shallow(<TaskItem removeTask={() => {}} task={{}} updateTask={() => {}} />);

    wrapper.find(`[data-test-id='edit-button']`).simulate('click');
    expect(wrapper.state('editing')).to.be.true;

    wrapper.find(`input.${styles.taskItemInput}`).simulate('keyUp', {
      keyCode: 27
    });

    expect(wrapper.state('editing')).to.be.false;
  });

  it('should submit the form and update the state', () => {
    const wrapper = shallow(<TaskItem removeTask={() => {}} task={{}} updateTask={() => {}} />);

    wrapper.find(`[data-test-id='edit-button']`).simulate('click');
    expect(wrapper.state('editing')).to.be.true;

    wrapper.find(`input.${styles.taskItemInput}`).simulate('keyUp', {
      keyCode: 13
    });

    expect(wrapper.state('editing')).to.be.false;
  });
});
