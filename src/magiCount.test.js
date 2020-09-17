import React from 'react';
import { render } from '@testing-library/react';
import magiCount from './magiCount';

test('renders learn react link', () => {
  const { getByText } = render(<magiCount />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
