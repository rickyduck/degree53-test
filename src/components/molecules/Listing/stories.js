import React from 'react';

import { storiesOf } from '@storybook/react';
import Listing from './';

import mockGithub from '../../../../__mocks__/github';

const stories = storiesOf('Molecules', module);

stories.add('Listing', () => (
  <Listing listing={mockGithub.github.results.items[0]} />
));
