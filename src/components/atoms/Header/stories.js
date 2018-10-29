import React from 'react';

import { storiesOf } from '@storybook/react';
import Header from './';

const stories = storiesOf('Atoms', module);

stories.add('Header', () => <Header title={'Welcome to Degree53'} />);
