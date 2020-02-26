import React from 'react';
import { render } from '@testing-library/react';

import ProjectList from './ProjectList';

it('renders without errors', () => {
  const component = () => render(<ProjectList />);

  expect(component).not.toThrowError();
});

it('renders empty message if no projects are provided', () => {
  const { queryByTestId } = render(<ProjectList projects={[]} />);

  expect(queryByTestId('emptyMessage')).toBeInTheDocument();
});

it('renders projects that are passed via props', () => {
  const projectProps = [
    {
      name: 'Project 1',
      description: 'Some description',
      url: 'http://example-1.com',
      employer: 'Company 1',
    },
    {
      name: 'Project 2',
      description: 'Some description',
      url: 'http://example-2.com',
      employer: 'Company 2',
    },
    {
      name: 'Project 3',
      description: 'Some description',
      url: 'http://example-3.com',
      employer: 'Company 3',
    },
  ];
  const { getByTestId, getAllByTestId } = render(
    <ProjectList projects={projectProps} />
  );
  const linkElements = getAllByTestId('project');
  const list = getByTestId('list');

  expect(linkElements).toHaveLength(projectProps.length);
  expect(list).toBeInTheDocument();
});

it('throws an error if passed props have the wrong shape', () => {
  const projectProps = [{ wrongKey: 'me' }];
  const component = () => render(<ProjectList projects={projectProps} />);

  expect(component).toThrowError();
});
