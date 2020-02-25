import React from 'react';
import { render } from '@testing-library/react';

import EducationItem from './EducationItem';

it('renders without errors', () => {
  const props = {
    name: 'Education',
    education: 'A path',
    city: 'Somewhere Else',
    startedAt: 2015,
    endedAt: 2018,
  };
  const component = () => render(<EducationItem {...props} />);

  expect(component).not.toThrowError();
});

it('throws an error if passed props have the wrong shape', () => {
  const props = {
    name: null,
    education: false,
    city: true,
    startedAt: 'A string',
    endedAt: 'A string',
  };
  const component = () => render(<EducationItem {...props} />);

  expect(component).toThrowError();
});

it('throws an error if required props are not passed', () => {
  const props = {
    name: undefined,
    ecucation: undefined,
    city: undefined,
    startedAt: undefined,
    endedAt: undefined,
  };
  const component = () => render(<EducationItem {...props} />);

  expect(component).toThrowError();
});

it('renders all passed props in DOM', () => {
  const props = {
    name: 'Education',
    education: 'A path',
    city: 'Somewhere',
    startedAt: 2015,
    endedAt: 2018,
  };
  const { getByTestId } = render(<EducationItem {...props} />);
  const component = getByTestId('content');

  expect(component).toHaveTextContent(props.name);
  expect(component).toHaveTextContent(props.education);
  expect(component).toHaveTextContent(props.city);
  expect(component).toHaveTextContent(props.startedAt);
  expect(component).toHaveTextContent(props.endedAt);
});
