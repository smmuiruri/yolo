import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';

// use describe, it pattern
test('renders learn react link', () => {
  const { getByText } = render();
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
