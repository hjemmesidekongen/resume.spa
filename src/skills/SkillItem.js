import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const SkillItem = ({ name, level, experienceInYears }) => (
  <Card variant="outlined" data-testid="content">
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        Niveau: {level}
      </Typography>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <Typography>
        <strong>Erfaring:</strong> {experienceInYears} år
      </Typography>
    </CardContent>
  </Card>
);

SkillItem.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  experienceInYears: PropTypes.number.isRequired,
};

export default SkillItem;
