
import React from 'react';
import renderer from 'react-test-renderer';
import NewsCard from '../NewsCard';


describe('NewsCard test', () => {
  it('NewsCard should match snapshot', () => {
    const component = renderer.create(<NewsCard
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
