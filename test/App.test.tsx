import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../src/App';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
  render(<App />);
  const container = screen.getByTestId('Container');
  expect(container).toBeInTheDocument();
  const content = screen.getByTestId('Content');
  expect(content).toBeInTheDocument();
  const stacks = screen.getAllByTestId('Stack');
  expect(stacks).toHaveLength(2);
});
