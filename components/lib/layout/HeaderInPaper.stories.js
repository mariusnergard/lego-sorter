import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  withKnobs,
  select,
  boolean,
} from '@storybook/addon-knobs';
import HeaderInPaper from './HeaderInPaper';

const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline',
  'srOnly',
  'inherit',
];

const align = [
  'inherit',
  'left',
  'center',
  'right',
  'justify',
];

storiesOf('components/lib/layout/HeaderInPaper', module)
  .addDecorator(withKnobs)

  .add('Default', () => (
    <>
      <HeaderInPaper>
        This is the default header in paper
      </HeaderInPaper>
    </>
  ))

  .add('Gutter bottom', () => (
    <>
      <HeaderInPaper gutterBottom>
        Adds a padding to the bottom
      </HeaderInPaper>
    </>
  ))

  .add('Variants', () => (
    <>
      <HeaderInPaper variant={select('variant', variants)}>
        h1 by default
      </HeaderInPaper>
    </>
  ))

  .add('Align', () => (
    <>
      <HeaderInPaper align={select('align', align)}>
        'inherit' by default
      </HeaderInPaper>
    </>
  ))

  .add('No wrap', () => (
    <>
      <HeaderInPaper noWrap={boolean('noWrap', true)}>
        true by default. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </HeaderInPaper>
    </>
  ));

