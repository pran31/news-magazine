import React from 'react';
import renderer from 'react-test-renderer';
import DetailedNews from '../DetailedNews';


describe('DetailedNews test', () => {
  it('DetailedNews should match snapshot', () => {
    const component = renderer.create(<DetailedNews
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
