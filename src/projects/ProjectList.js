import React from 'react';
import PropTypes from 'prop-types';

import ProjectItem from './ProjectItem';

const ProjectList = ({ projects }) => {
  if (projects.length === 0) {
    return <div data-testid="emptyMessage">Ingen projekter tilføjet.</div>;
  }

  return (
    <div data-testid="list">
      {projects.map(project => (
        <div
          data-testid="project"
          key={project.url}
        >
          <ProjectItem
            name={project.name}
            description={project.description}
            employer={project.employer}
            url={project.url}
          />
        </div>
      ))}
    </div>
  );
};

ProjectList.defaultProps = {
  projects: [],
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      employer: PropTypes.string.isRequired,
    })
  ),
};

export default ProjectList;
