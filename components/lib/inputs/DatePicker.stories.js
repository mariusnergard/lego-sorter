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
import DatePicker from './DatePicker';

const variants = ['dialog', 'inline', 'static'];


storiesOf('components/lib/inputs/DatePicker', module)
  .addDecorator(withKnobs)

  .add('Default', () => (
    <DatePicker
      id="simple"
      label="Default"
      onChange={value => console.log(value)}
      variant={select('variant', variants)}
    />
  ))

  .add('Inline', () => (
    <DatePicker
      id="inline"
      label="Inline"
      onChange={value => console.log(value)}
      variant="inline"
    />
  ))

  .add('Static', () => (
    <DatePicker
      id="static"
      label="Static"
      onChange={value => console.log(value)}
      variant="static"
    />
  ));

