import React from 'react';
import PropTypes from 'prop-types';

const SkillItem = ({ name, level, experienceInYears }) => (
  <div className="skill-item" data-testid="content">
    <div><h3>{name}</h3></div>
    <div>Niveau: {level}</div>
    <div>Erfaring: {experienceInYears} år</div>
  </div>
);

SkillItem.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  experienceInYears: PropTypes.number.isRequired,
};

export default SkillItem;
