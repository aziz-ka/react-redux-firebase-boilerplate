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
    expect(wrapper.find(`.${styles.active}`)).to.have.length(1);
  });
});
