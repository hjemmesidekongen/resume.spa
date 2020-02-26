import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import EducationItem from './EducationItem';

const EducationList = ({ educations }) => {
  if (educations.length === 0) {
    return <div data-testid="emptyMessage">Ingen uddannelser tilføjet.</div>;
  }

  return (
    <Grid container spacing={3} data-testid="list">
      {educations.map(education => (
        <Grid
          item
          sm={4}
          data-testid="education"
          key={`${education.name}-${education.startedAt}`}
        >
          <EducationItem
            name={education.name}
            education={education.education}
            city={education.city}
            startedAt={education.startedAt}
            endedAt={education.endedAt}
          />
        </Grid>
      ))}
    </Grid>
  );
};

EducationList.defaultProps = {
  educations: [],
};

EducationList.propTypes = {
  educations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      education: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      startedAt: PropTypes.number.isRequired,
      endedAt: PropTypes.number.isRequired,
    })
  ),
};

export default EducationList;
