import React from 'react';
import PropTypes from 'prop-types';

const CompanyItem = ({ name, logo, url, city, hiredAt, endedAt }) => (
  <div className="company-item">
    <span data-testid="name">{name}</span>
    <span data-testid="logo">{logo}</span>
    <span data-testid="url">{url}</span>
    <span data-testid="city">{city}</span>
    <span data-testid="hiredAt">{hiredAt}</span>
    <span data-testid="endedAt">{endedAt}</span>
  </div>
);

CompanyItem.defaultProps = {
  logo: '/example-logo.svg',
};

CompanyItem.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string,
  url: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  hiredAt: PropTypes.number.isRequired,
  endedAt: PropTypes.number.isRequired,
};

export default CompanyItem;
