import React from 'react';
import { render } from '@testing-library/react';

import CompanyItem from './CompanyItem';

it('renders without errors', () => {
  const props = {
    name: 'Some Company',
    url: 'http://example.com',
    city: 'Some Town',
    logo: './logo.png',
    hiredAt: 2010,
    endedAt: 2015,
  };
  const component = () => render(<CompanyItem {...props} />);

  expect(component).not.toThrowError();
});

it('throws an error if passed props have the wrong shape', () => {
  const props = {
    name: null,
    url: false,
    city: true,
    logo: 2010,
    hiredAt: 'A string',
    endedAt: 'A string',
  };
  const component = () => render(<CompanyItem {...props} />);

  expect(component).toThrowError();
});

it('throws an error if required props are not passed', () => {
  const props = {
    name: undefined,
    url: undefined,
    city: undefined,
    logo: undefined,
    hiredAt: undefined,
    endedAt: undefined,
  };
  const component = () => render(<CompanyItem {...props} />);

  expect(component).toThrowError();
});

it('renders all passed props in DOM', () => {
  const props = {
    name: 'Some Company',
    url: 'http://example.com',
    city: 'Some Town',
    logo: './logo.png',
    hiredAt: 2010,
    endedAt: 2015,
  };
  const { getByTestId } = render(<CompanyItem {...props} />);

  expect(getByTestId('name')).toHaveTextContent(props.name);
  expect(getByTestId('url')).toHaveTextContent(props.url);
  expect(getByTestId('city')).toHaveTextContent(props.city);
  expect(getByTestId('logo')).toHaveTextContent(props.logo);
  expect(getByTestId('hiredAt')).toHaveTextContent(props.hiredAt);
  expect(getByTestId('endedAt')).toHaveTextContent(props.endedAt);
});
