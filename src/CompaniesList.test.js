import React from 'react';
import { render } from '@testing-library/react';

import CompaniesList from './CompaniesList';

it('renders without errors', () => {
    const component = () => render(<CompaniesList />);

    expect(component).not.toThrowError();
});

it('renders empty message if no companies are provided', () => {
    const { queryByTestId } = render(<CompaniesList companies={[]} />);

    expect(queryByTestId('emptyMessage')).toBeInTheDocument();
});

it('renders companies that are passed via props', () => {
    const companyProps = [
        { name: 'Company 1', logo: '/logo.jpg', url: 'http://example.com', city: 'SomeWhere', hiredAt: 2010, endedAt: 2012 },
        { name: 'Company 2', logo: '/logo.jpg', url: 'http://example.com', city: 'SomeWhere', hiredAt: 2013, endedAt: 2015 },
        { name: 'Company 3', logo: '/logo.jpg', url: 'http://example.com', city: 'SomeWhere', hiredAt: 2016, endedAt: 2018 },
    ];
    const { getByTestId, getAllByTestId } = render(
        <CompaniesList companies={companyProps} />
    );
    const linkElements = getAllByTestId('company');
    const list = getByTestId('list');

    expect(linkElements).toHaveLength(companyProps.length);
    expect(list).toBeInTheDocument();
});

it('throws an error if passed props have the wrong shape', () => {
    const companyProps = [{ wrongKey: 'me' }];
    const component = () => render(<CompaniesList companies={companyProps} />);

    expect(component).toThrowError();
});
