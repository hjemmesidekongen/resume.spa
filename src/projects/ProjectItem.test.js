import React from 'react';
import { render } from '@testing-library/react';

import ProjectItem from './ProjectItem';

it('renders without errors', () => {
  const props = {
    name: 'A project',
    description: 'Some description',
    url: 'http://example.com',
    employer: 'Company 1',
  };
  const component = () => render(<ProjectItem {...props} />);

  expect(component).not.toThrowError();
});

it('throws an error if passed props have the wrong shape', () => {
  const props = {
    name: null,
    description: false,
    url: true,
    employer: undefined,
  };
  const component = () => render(<ProjectItem {...props} />);

  expect(component).toThrowError();
});

it('throws an error if required props are not passed', () => {
  const props = {
    name: undefined,
    description: undefined,
    url: undefined,
    employer: undefined,
  };
  const component = () => render(<ProjectItem {...props} />);

  expect(component).toThrowError();
});

it('renders all passed props in DOM', () => {
  const props = {
    name: 'A project',
    description: 'Some description',
    url: 'http://example-1.com',
    employer: 'Company 1',
  };
  const { getByTestId } = render(<ProjectItem {...props} />);
  const component = getByTestId('content');

  expect(component).toHaveTextContent(props.name);
  expect(component).toHaveTextContent(props.description);
  expect(component.querySelector('a').getAttribute('href')).toBe(props.url);
  expect(component).toHaveTextContent(props.employer);
});
