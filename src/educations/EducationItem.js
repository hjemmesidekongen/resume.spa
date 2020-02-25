import React from 'react';
import PropTypes from 'prop-types';

const EducationItem = ({ name, education, city, startedAt, endedAt }) => (
  <div className="education-item" data-testid="content">
    <div>{name}</div>
    <div>{education}</div>
    <div>{city}</div>
    <div>Startet: {startedAt}</div>
    <div>Ophørt: {endedAt}</div>
  </div>
);

EducationItem.propTypes = {
  name: PropTypes.string.isRequired,
  education: PropTypes.string,
  city: PropTypes.string.isRequired,
  startedAt: PropTypes.number.isRequired,
  endedAt: PropTypes.number.isRequired,
};

export default EducationItem;
