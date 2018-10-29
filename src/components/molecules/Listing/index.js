import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    height: 60,
    width: 60
  }
});

const Listing = ({ listing, classes }) => {
  return (
    <Card className={classes.card}>
      <div className={classes.cardDetails}>
        <a href={listing.html_url}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {listing.name}
            </Typography>
          </CardContent>
        </a>
      </div>
      <a href={listing.owner.html_url}>
        <CardMedia
          className={classes.cardMedia}
          image={listing.owner.avatar_url}
          title={listing.owner.login}
        />
      </a>
    </Card>
  );
};

export default withStyles(styles)(Listing);
