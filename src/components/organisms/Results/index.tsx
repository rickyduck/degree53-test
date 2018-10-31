import React, { SFC } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Listing from '../../molecules/Listing';
import PaperSheet from '../../organisms/PaperSheet';

import IResults from '../../../interfaces/IResults';

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
    return (
      <section>
        <PaperSheet>
          <Typography component="p">
            No results, please refine your search
          </Typography>
        </PaperSheet>
      </section>
    );
  }
};

export default Results;
