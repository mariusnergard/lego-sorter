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
import Switch from './Switch';

storiesOf('components/lib/inputs/Switch', module)
  .addDecorator(withKnobs)

  .add('Simple', () => (
    <Switch
      id="simple"
      value
      onChange={value => console.log(value)}
    />
  ))

  .add('With label', () => (
    <Switch
      id="withLabel"
      label="With label"
      value={false}
      onChange={value => console.log(value)}
    />
  ));
