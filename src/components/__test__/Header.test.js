import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';


describe('Header test', () => {
  it('Header should match snapshot', () => {
    const component = renderer.create(<Header
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
