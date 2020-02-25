import React from 'react';
import { render } from '@testing-library/react';

import EducationsList from './EducationsList';

it('renders without errors', () => {
  const component = () => render(<EducationsList />);

  expect(component).not.toThrowError();
});

it('renders empty message if no educations are provided', () => {
  const { queryByTestId } = render(<EducationsList educations={[]} />);

  expect(queryByTestId('emptyMessage')).toBeInTheDocument();
});

it('renders educations that are passed via props', () => {
  const educationProps = [
    {
      name: 'Education 1',
      education: 'A path',
      city: 'SomeWhere',
      startedAt: 2010,
      endedAt: 2012,
    },
    {
      name: 'Education 2',
      education: 'A path 2',
      city: 'SomeWhere New',
      startedAt: 2013,
      endedAt: 2014,
    },
    {
      name: 'Education 3',
      education: 'A path 3',
      city: 'Somewhere Else',
      startedAt: 2015,
      endedAt: 2018,
    },
  ];
  const { getByTestId, getAllByTestId } = render(
    <EducationsList educations={educationProps} />
  );
  const linkElements = getAllByTestId('education');
  const list = getByTestId('list');

  expect(linkElements).toHaveLength(educationProps.length);
  expect(list).toBeInTheDocument();
});

it('throws an error if passed props have the wrong shape', () => {
  const educationProps = [{ wrongKey: 'me' }];
  const component = () =>
    render(<EducationsList educations={educationProps} />);

  expect(component).toThrowError();
});
