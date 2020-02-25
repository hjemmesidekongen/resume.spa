import React from 'react';
import Typography from '@material-ui/core/Typography';

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
      <Typography variant="h4">
        Uddannelser
      </Typography>
      <EducationList educations={orderedEducations} />
    </div>
  );
};

export default Educations;
