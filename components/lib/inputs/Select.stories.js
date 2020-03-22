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
import Select from './Select';
import TextField from './TextField';

const variants = ['standard', 'outlined', 'filled'];


const options = [
  {
    value: 1,
    label: 'Option 1',
  },
  {
    value: 2,
    label: 'Option 2',
  },
  {
    value: 3,
    label: 'Option 3',
  },
  {
    value: 4,
    label: 'Option 4',
  },
];

storiesOf('components/lib/inputs/Select', module)
  .addDecorator(withKnobs)

  .add('Simple', () => (
    <Select
      id="simple"
      value={2}
      options={options}
      onChange={value => console.log(value)}
      variant={select('variant', variants)}

    />
  ))

  .add('Simple Multiple', () => (
    <Select
      id="multiId"
      multiple
      value={[2, 4]}
      options={options}
      onChange={value => console.log(value)}
      variant={select('variant', variants)}

    />
  ))

  .add('Multiple Chip', () => (
    <Select
      id="chipMultiId"
      multiple
      chip
      value={[2]}
      options={options}
    />
  ))

  .add('Multiple Chip Tag', () => (
    <Select
      id="chipTagMultiId"
      multiple
      chip
      tag
      value={[1, 2]}
      options={options}
    />
  ));
