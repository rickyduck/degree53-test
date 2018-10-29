import React from 'react';

import { storiesOf } from '@storybook/react';
import Results from './';

import mockGithub from '../../../../__mocks__/github';

const stories = storiesOf('Organisms', module);

stories.add('Results', () => <Results results={mockGithub.github.results} />);
