import React from 'react';
import PropTypes from 'prop-types';

const CompanyItem = ({ name, logo, url, city, hiredAt, endedAt }) => (
  <div className="company-item" data-testid="content">
    <div>{name}</div>
    <div>{logo}</div>
    <div>{url}</div>
    <div>{city}</div>
    <div>Ansat: {hiredAt}</div>
    <div>Ophørt: {endedAt}</div>
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
