import 'react-native';
import React from 'react';
import Home from './../source/Home';
import renderer from 'react-test-renderer';

test('function and state take care', () => {
  let HomeData = renderer.create(<Home />).getInstance();
  HomeData.onChangeValue(2);
  expect(HomeData.state.data).toEqual(20);
});
