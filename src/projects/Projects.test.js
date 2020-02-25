import React from 'react';
import { render } from '@testing-library/react';

import Projects from './Projects';

it('renders without errors', () => {
  const component = () => render(<Projects />);

  expect(component).not.toThrowError();
});
