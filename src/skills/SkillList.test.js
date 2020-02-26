import React from 'react';
import { render } from '@testing-library/react';

import SkillList from './SkillList';

it('renders without errors', () => {
  const component = () => render(<SkillList />);

  expect(component).not.toThrowError();
});

it('renders empty message if no skills are provided', () => {
  const { queryByTestId } = render(<SkillList skills={[]} />);

  expect(queryByTestId('emptyMessage')).toBeInTheDocument();
});

it('renders skills that are passed via props', () => {
  const skillProps = [
    {
      name: 'No. 1 skill',
      level: 'low',
      experienceInYears: 1,
    },
    {
      name: 'No. 2 skill',
      level: 'medium',
      experienceInYears: 2,
    },
    {
      name: 'No. 3 skill',
      level: 'high',
      experienceInYears: 3,
    },
  ];
  const { getByTestId, getAllByTestId } = render(
    <SkillList skills={skillProps} />
  );
  const linkElements = getAllByTestId('skill');
  const list = getByTestId('list');

  expect(linkElements).toHaveLength(skillProps.length);
  expect(list).toBeInTheDocument();
});

it('throws an error if passed props have the wrong shape', () => {
  const skillProps = [{ wrongKey: 'me' }];
  const component = () => render(<SkillList skills={skillProps} />);

  expect(component).toThrowError();
});
