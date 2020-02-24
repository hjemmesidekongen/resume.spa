import React from 'react';
import PropTypes from 'prop-types';

const CompaniesList = ({companies}) => {
    const content = () => {
        if (companies.length === 0) {
            return (
                <div data-testid="emptyMessage">
                    Ingen virksomheder tilføjet.
                </div>
            );
        }

        return (
            <div data-testid="list">
                {companies.map(company => (
                    <div data-testid="company" key={`${company.name}-${company.hiredAt}`}>
                        {company.name}
                    </div>
                ))}
            </div>
        )
    }

    return( 
        <div>
            {content()}
        </div>
    )
}

CompaniesList.defaultProps = {
    companies: [],
};

CompaniesList.propTypes = {
    companies: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            logo: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            hiredAt: PropTypes.number.isRequired,
            endedAt: PropTypes.number.isRequired
        })
    ),
};

export default CompaniesList;
