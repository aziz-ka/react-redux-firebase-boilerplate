import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Icon from '../index';


describe('<Icon />', () => {
  it('should render an icon with a default className', () => {
    const wrapper = shallow(<Icon name="play" />);

    expect(wrapper.find(<span className="material-icons">play</span>)).to.exist;
  });

  it('should render an icon with provided className', () => {
    const wrapper = shallow(<Icon className="foo bar" name="play" />);

    expect(wrapper.find('material-icons foo bar')).to.exist;
  });
});
