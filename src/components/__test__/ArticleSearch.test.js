import React from 'react';
import renderer from 'react-test-renderer';
import ArticleSearch from '../ArticleSearch';


describe('ArticleSearch test', () => {
  it('ArticleSearch should match snapshot', () => {
    const component = renderer.create(<ArticleSearch
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
