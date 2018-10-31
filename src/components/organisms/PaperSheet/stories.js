import React from 'react';

import { storiesOf } from '@storybook/react';
import Typography from '@material-ui/core/Typography';

import PaperSheet from '.';

const stories = storiesOf('Organisms', module);

stories.add('PaperSheet', () => (
  <PaperSheet>
    <Typography variant="h5" component="h3">
      This is a sheet of paper.
    </Typography>
    <Typography component="p">
      Paper can be used to build surface or other elements for your application.
    </Typography>
  </PaperSheet>
));
