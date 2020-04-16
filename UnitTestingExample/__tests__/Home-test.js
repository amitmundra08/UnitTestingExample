import 'react-native';
import React from 'react';
import Home from './../source/Home';
import renderer from 'react-test-renderer';

test('Home', () => {
  const snap = renderer.create(<Home />).toJSON();
  expect(snap).toMatchSnapshot();
});
