import React from 'react';
import { render } from '@testing-library/react';

import Educations from './Educations';

it('renders without errors', () => {
  const component = () => render(<Educations />);

  expect(component).not.toThrowError();
});
