import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import TaskForm from '../index';


describe('<TaskForm />', () => {
  it('should render task form', () => {
    const wrapper = shallow(<TaskForm handleSubmit={() => {}} />);
    const formInput = wrapper.find('input');

    expect(formInput).to.have.length(1);
    expect(wrapper.state('title')).to.eql('');
  });

  it('should update state on input\'s onChange event', () => {
    const wrapper = shallow(<TaskForm handleSubmit={() => {}} />);

    wrapper.find('input').simulate('change', {
      target: {
        value: 'some title'
      }
    });

    expect(wrapper.state('title')).to.eql('some title');
  });

  it('should update state on pressing Esc key', () => {
    const wrapper = shallow(<TaskForm handleSubmit={() => {}} />);

    wrapper.setState({title: 'some title'});
    expect(wrapper.state('title')).to.eql('some title');

    wrapper.find('input').simulate('keyUp', {
      keyCode: 27
    });

    expect(wrapper.state('title')).to.eql('');
  });

  it('should submit the form and update the state', () => {
    const wrapper = shallow(<TaskForm handleSubmit={() => {}} />);

    wrapper.setState({title: 'some title'});
    expect(wrapper.state('title')).to.eql('some title');

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(wrapper.state('title')).to.eql('');
  });
});
