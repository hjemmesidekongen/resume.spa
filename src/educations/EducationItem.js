import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const EducationItem = ({ name, education, city, startedAt, endedAt }) => (
  <Card variant="outlined" data-testid="content">
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {education} - {city}
      </Typography>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <Typography>
        <strong>Startet:</strong> {startedAt}
      </Typography>
      <Typography>
        <strong>Ophørt:</strong> {endedAt}
      </Typography>
    </CardContent>
  </Card>
);

EducationItem.propTypes = {
  name: PropTypes.string.isRequired,
  education: PropTypes.string,
  city: PropTypes.string.isRequired,
  startedAt: PropTypes.number.isRequired,
  endedAt: PropTypes.number.isRequired,
};

export default EducationItem;
