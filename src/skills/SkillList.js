import React from 'react';
import PropTypes from 'prop-types';

import SkillItem from './SkillItem';

const SkillList = ({ skills }) => {
  if (skills.length === 0) {
    return <div data-testid="emptyMessage">Ingen færdigheder tilføjet.</div>;
  }

  return (
    <div data-testid="list">
      {skills.map(skill => (
        <div
          data-testid="skill"
          key={skill.name}
        >
          <SkillItem
            name={skill.name}
            level={skill.level}
            experienceInYears={skill.experienceInYears}
          />
        </div>
      ))}
    </div>
  );
};

SkillList.defaultProps = {
  skills: [],
};

SkillList.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.oneOf(['low', 'medium', 'high', 'extreme']).isRequired,
      experienceInYears: PropTypes.number.isRequired,
    })
  ),
};

export default SkillList;
