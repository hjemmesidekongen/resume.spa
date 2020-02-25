import React from 'react';

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
      <h2>Færdigheder</h2>
      <SkillList skills={orderedSkills} />
    </div>
  );
};

export default Skills;
