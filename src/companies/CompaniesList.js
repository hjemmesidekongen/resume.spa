import React from 'react';
import PropTypes from 'prop-types';

import CompanyItem from './CompanyItem';

const CompaniesList = ({ companies }) => {
  if (companies.length === 0) {
    return <div data-testid="emptyMessage">Ingen virksomheder tilføjet.</div>;
  }

  return (
    <div data-testid="list">
      {companies.map(company => (
        <div data-testid="company" key={`${company.name}-${company.hiredAt}`}>
          <CompanyItem
            name={company.name}
            url={company.url}
            logo={company.logo}
            city={company.city}
            hiredAt={company.hiredAt}
            endedAt={company.endedAt}
          />
        </div>
      ))}
    </div>
  );
};

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
      endedAt: PropTypes.number.isRequired,
    })
  ),
};

export default CompaniesList;
