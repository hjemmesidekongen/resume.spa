import React from 'react';
import Typography from '@material-ui/core/Typography';

import store from '../store/skills.json';
import SkillList from './SkillList';

const Skills = () => {
  const skills = store.data;
  const orderedSkills = skills.sort((a, b) => {
    if (a.experienceInYears > b.experienceInYears) return 1;
    if (b.experienceInYears > a.experienceInYears) return -1;

    return 0;
  });

  return (
    <div>
      <Typography variant="h4">Færdigheder</Typography>
      <SkillList skills={orderedSkills} />
    </div>
  );
};

export default Skills;
