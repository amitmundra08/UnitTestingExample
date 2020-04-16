import 'react-native';
import React from 'react';
import Home from './../source/Home';
import renderer from 'react-test-renderer';

let findElement = function (tree, element) {
  let isPresent = tree.children.find(
    (singleElement) => singleElement.props.testID === element,
  );
  return isPresent;
};

it('find element', () => {
  let tree = renderer.create(<Home />).toJSON();
  expect(findElement(tree, 'password')).toBeDefined();
});
