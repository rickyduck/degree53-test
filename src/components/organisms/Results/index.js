import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Listing from '../../molecules/Listing';

const styles = () => ({
  root: {
    flexGrow: 1
  }
});

const Results = ({ results }) => {
  if (results.items) {
    const listings = results.items.map(listing => {
      return (
        <Grid item xs={3}>
          <Listing listing={listing} />
        </Grid>
      );
    });
    return (
      <section class="listing">
        <Grid container spacing={24}>
          {listings}
        </Grid>
      </section>
    );
  } else {
    return <div>No results, please refine your search</div>;
  }
};

export default withStyles(styles)(Results);
