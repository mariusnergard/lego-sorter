import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
} from '@storybook/addon-knobs';
import TextField from './TextField';

const variants = ['standard', 'outlined', 'filled'];


storiesOf('components/lib/inputs/TextField', module)
  .addDecorator(withKnobs)

  .add('Simple', () => (
    <TextField
      id="simple"
      onChange={value => console.log(value)}
      variant={select('variant', variants)}
    />
  ))

  .add('With label', () => (
    <TextField
      id="withLabel"
      label="With label"
      variant={select('variant', variants)}
      onChange={value => console.log(value)}
    />
  ));
