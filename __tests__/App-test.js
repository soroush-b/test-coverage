import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('Should create an item', () => {
  const {getByText, getByPlaceholderText} = render(<App />);

  const textInput = getByPlaceholderText('Write something');
  const addItemButton = getByText('+');

  const createdItemText = 'first todo';

  fireEvent.changeText(textInput, createdItemText);
  fireEvent.press(addItemButton);

  const createdItem = getByText(createdItemText);

  expect(createdItem).not.toBeNull();
});
