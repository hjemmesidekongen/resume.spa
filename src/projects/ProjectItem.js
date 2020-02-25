import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ name, description, url, employer }) => (
  <div className="project-item" data-testid="content">
    <div><h3>{name}</h3></div>
    <div>{description}</div>
    <div><a href={url}>Besøg hjemmeside</a></div>
    <div>Arbejdsgiver: {employer}</div>
  </div>
);

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  employer: PropTypes.string.isRequired,
};

export default ProjectItem;
