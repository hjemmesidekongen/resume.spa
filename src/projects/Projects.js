import React from 'react';
import Typography from '@material-ui/core/Typography';

import store from '../store/projects.json';
import ProjectList from './ProjectList';

const Projects = () => {
  const projects = store.data;
  const orderedProjects = projects.sort((a, b) => {
    if (a.employer > b.employer) return 1;
    if (b.employer > a.employer) return -1;

    return 0;
  });

  return (
    <div>
      <Typography variant="h4">Projekter</Typography>
      <ProjectList projects={orderedProjects} />
    </div>
  );
};

export default Projects;
