import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CompanyItem = ({ name, logo, url, city, hiredAt, endedAt }) => (
  <Card variant="outlined" data-testid="content">
    <CardActionArea>
      <CardMedia
        image={logo}
        title={name}
      />
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {city}
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography>
          <strong>Ansat:</strong> {hiredAt}
        </Typography>
        <Typography>
          <strong>Ophørt:</strong> {endedAt}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button href={url}>Besøg hjemmeside</Button>
    </CardActions>
  </Card>
);

CompanyItem.defaultProps = {
  logo: '/example-logo.svg',
};

CompanyItem.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string,
  url: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  hiredAt: PropTypes.number.isRequired,
  endedAt: PropTypes.number.isRequired,
};

export default CompanyItem;
