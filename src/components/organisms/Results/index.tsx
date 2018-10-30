import React, { SFC } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Listing from '../../molecules/Listing';
import IResults from '../../../interfaces/IResults';

const styles = () => ({
  root: {
    flexGrow: 1
  }
});

interface IProps {
  results: IResults;
}

const Results: SFC<IProps> = ({ results }): JSX.Element => {
  if (results.items) {
    const listings = results.items.map(listing => {
      return (
        <Grid key={listing.id} item xs={3}>
          <Listing listing={listing} />
        </Grid>
      );
    });
    return (
      <section className="listing">
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
