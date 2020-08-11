import React from 'react';
import renderer from 'react-test-renderer';
import ContactUs from '../ContactUs';


describe('ContactUs test', () => {
  it('ContactUs should match snapshot', () => {
    const component = renderer.create(<ContactUs
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
