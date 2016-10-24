import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import TaskFilters from '../index';
import styles from '../styles.scss';


describe('<TaskFilters />', () => {
  it('should render task filter links', () => {
    const wrapper = shallow(<TaskFilters />);
    const filterLinks = wrapper.find('Link');

    expect(filterLinks).to.have.length(3);
  });

  it('should add an "acitive" className to "completed" filter', () => {
    const wrapper = shallow(<TaskFilters filter='completed' />);

    expect(wrapper.find(styles.active)).to.exist;
  });
});
