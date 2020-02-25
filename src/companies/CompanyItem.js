import React from 'react';
import PropTypes from 'prop-types';

const CompanyItem = ({ name, logo, url, city, hiredAt, endedAt }) => (
  <div className="company-item">
    <div data-testid="name">{name}</div>
    <div data-testid="logo">{logo}</div>
    <div data-testid="url">{url}</div>
    <div data-testid="city">{city}</div>
    <div data-testid="hiredAt">Ansat: {hiredAt}</div>
    <div data-testid="endedAt">Ophørt: {endedAt}</div>
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
