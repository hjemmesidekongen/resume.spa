import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import ProjectItem from './ProjectItem';

const ProjectList = ({ projects }) => {
  if (projects.length === 0) {
    return <div data-testid="emptyMessage">Ingen projekter tilføjet.</div>;
  }

  return (
    <Grid container spacing={3} data-testid="list">
      {projects.map(project => (
        <Grid item sm={4}
          data-testid="project"
          key={`${project.name}-${project.url}`}
        >
          <ProjectItem
            name={project.name}
            description={project.description}
            employer={project.employer}
            url={project.url}
          />
        </Grid>
      ))}
    </Grid>
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
