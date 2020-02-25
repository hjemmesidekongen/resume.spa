import React from 'react';

import store from '../store/educations.json';
import EducationList from './EducationList';

const Educations = () => {
  const educations = store.data;
  const orderedEducations = educations.sort((a, b) => {
    if (a.hiredAt > b.hiredAt) return 1;
    if (b.hiredAt > a.hiredAt) return -1;

    return 0;
  });

  return (
    <div>
      <h2>Uddannelser</h2>
      <EducationList educations={orderedEducations} />
    </div>
  );
};

export default Educations;
