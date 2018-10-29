import React from 'react';

import { storiesOf } from '@storybook/react';
import { GithubSearchComponent } from './';

import mockGithub from '../../../../__mocks__/github';

const stories = storiesOf('Templates', module);

stories.add('GithubSearchComponent', () => (
  <GithubSearchComponent github={mockGithub.github} />
));
