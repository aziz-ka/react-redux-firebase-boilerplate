import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Button from '../index';
import styles from '../styles.scss';


describe('<Button />', () => {
  it('should set default className', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.find(`.${styles.btn}`)).to.have.length(1);
  });

  it('should add provided props.className', () => {
    const wrapper = shallow(<Button className="foo bar" />);

    expect(wrapper.find(`.${styles.btn} .foo .bar`)).to.have.length(1);
  });

  it('should set type="button" by default', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.find('[type="button"]')).to.have.length(1);
  });

  it('should set type with provided props.type', () => {
    const wrapper = shallow(<Button type='submit' />);

    expect(wrapper.find('[type="submit"]')).to.have.length(1);
  });
});
