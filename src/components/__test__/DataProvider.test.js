import React from 'react';
import renderer from 'react-test-renderer';
import DataProvider from '../DataProvider';


describe('DataProvider test', () => {
  it('DataProvider should match snapshot', () => {
    const component = renderer.create(<DataProvider
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
