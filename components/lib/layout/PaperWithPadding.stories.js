import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  withKnobs,
  select,
  boolean,
} from '@storybook/addon-knobs';
import { Typography } from '@material-ui/core';
import PaperWithPadding from './PaperWithPadding';


storiesOf('components/lib/layout/PaperWithPadding', module)
  .addDecorator(withKnobs)

  .add('Default', () => (
    <>
      <PaperWithPadding>
        <Typography>This is the paper with padding</Typography>
      </PaperWithPadding>
    </>
  ))

  .add('As button', () => (
    <>
      <PaperWithPadding asButton>
        <Typography>Behaves like a button</Typography>
      </PaperWithPadding>
    </>
  ));

