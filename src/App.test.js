/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Configure, Shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Child1 from './Child1';

Configure({ adapter: new Adapter() });

describe('child1 item', () => {
  it('should have one child component', () => {
    const wrapper = Shallow(<Child1 />);
    expect(wrapper.find(Child1)).toHaveLength(1);
  });
});
