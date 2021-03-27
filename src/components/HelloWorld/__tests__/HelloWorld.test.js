import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorld from '../HelloWorld';

describe('Hello World component', () => {
  describe('With Enzyme', () => {
    it('It must contain the text "Hello World" inside an H1 in the Hello World component', () => {
      const wrap = shallow(<HelloWorld />);

      expect(wrap.find('h1').text()).toEqual('Hello World');
    });
  });

  describe('With Snapshot Testing', () => {
    it('should render Hello World', () => {
      const component = (
        <HelloWorld />
      );

      const tree = renderer.create(component).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
