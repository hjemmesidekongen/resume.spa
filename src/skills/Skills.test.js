import React from 'react';
import { render } from '@testing-library/react';

import Skills from './Skills';

it('renders without errors', () => {
  const component = () => render(<Skills />);

  expect(component).not.toThrowError();
});
