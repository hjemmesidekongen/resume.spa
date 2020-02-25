import React from 'react';
import { render } from '@testing-library/react';

import SkillItem from './SkillItem';

it('renders without errors', () => {
  const props = {
    name: 'A skill',
    level: 'medium',
    experienceInYears: 5,
  };
  const component = () => render(<SkillItem {...props} />);

  expect(component).not.toThrowError();
});

it('throws an error if passed props have the wrong shape', () => {
  const props = {
    name: false,
    level: 12,
    experienceInYears: 'Not a number',
  };
  const component = () => render(<SkillItem {...props} />);

  expect(component).toThrowError();
});

it('throws an error if required props are not passed', () => {
  const props = {
    name: undefined,
    level: undefined,
    experienceInYears: undefined,
  };
  const component = () => render(<SkillItem {...props} />);

  expect(component).toThrowError();
});

it('renders all passed props in DOM', () => {
  const props = {
    name: 'A skill',
    level: 'medium',
    experienceInYears: 5,
  };
  const { getByTestId } = render(<SkillItem {...props} />);
  const component = getByTestId('content');

  expect(component).toHaveTextContent(props.name);
  expect(component).toHaveTextContent(props.level);
  expect(component).toHaveTextContent(props.experienceInYears);
});
