import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ProjectItem = ({ name, description, url, employer }) => (
  <Card variant="outlined" data-testid="content">
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {employer}
      </Typography>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <Typography>
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button href={url} target="_blank">Besøg hjemmeside</Button>
    </CardActions>
  </Card>
);

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  employer: PropTypes.string.isRequired,
};

export default ProjectItem;
