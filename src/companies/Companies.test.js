import React from 'react';
import { render } from '@testing-library/react';

import Companies from './Companies';

it('renders without errors', () => {
  const component = () => render(<Companies />);

  expect(component).not.toThrowError();
});
