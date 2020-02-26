import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import SkillItem from './SkillItem';

const SkillList = ({ skills }) => {
  if (skills.length === 0) {
    return <div data-testid="emptyMessage">Ingen færdigheder tilføjet.</div>;
  }

  return (
    <Grid container spacing={3} data-testid="list">
      {skills.map(skill => (
        <Grid item sm={4} data-testid="skill" key={skill.name}>
          <SkillItem
            name={skill.name}
            level={skill.level}
            experienceInYears={skill.experienceInYears}
          />
        </Grid>
      ))}
    </Grid>
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
