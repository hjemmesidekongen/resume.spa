import React from 'react';
import PropTypes from 'prop-types';

import EducationItem from './EducationItem';

const EducationList = ({ educations }) => {
  if (educations.length === 0) {
    return <div data-testid="emptyMessage">Ingen uddannelser tilføjet.</div>;
  }

  return (
    <div data-testid="list">
      {educations.map(education => (
        <div
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
        </div>
      ))}
    </div>
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
