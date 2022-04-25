import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QQ查询标题', () => {
  render(<App />);
  const linkElement = screen.getByText(/QQ查询/i);
  expect(linkElement).toBeInTheDocument();
});
