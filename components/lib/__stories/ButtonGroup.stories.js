import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  withKnobs,
  select,
} from '@storybook/addon-knobs';
import ButtonGroup from '../buttons/ButtonGroup';

const colors = ['default', 'primary', 'secondary'];
const variants = ['outlined', 'text', 'contained'];

const marginStyle = {
  margin: '10px',
};

storiesOf('components/lib/ButtonGroup', module)
  .addDecorator(withKnobs)

  .add('ButtonGroup', () => (
    <>
      <div style={marginStyle}>
        <a href="https://material-ui.com/api/button-group/" target="new">
          https://material-ui.com/api/button-group/
        </a>
      </div>
      <ButtonGroup
        buttons={
          [
            {
              text: 'Button 1',
              onClick: () => console.log('Clicked Button 1!'),
            },
            {
              text: 'Button 2',
              onClick: () => console.log('Clicked Button 2!'),
            },
            {
              text: 'Button 3',
              onClick: () => console.log('Clicked Button 2!'),
            },
          ]
        }
      />
    </>
  ))

  .add('Orientation', () => (
    <>
      <div>
        <p>orientation="horizontal" (default)</p>
        <ButtonGroup
          buttons={
          [
            {
              text: 'Button 1',
              onClick: () => console.log('Clicked Button 1!'),
            },
            {
              text: 'Button 2',
              onClick: () => console.log('Clicked Button 2!'),
            },
            {
              text: 'Button 3',
              onClick: () => console.log('Clicked Button 3!'),
            },
          ]
        }
        />
      </div>
      <div>
        <p>orientation="vertical"</p>
        <ButtonGroup
          orientation="vertical"
          buttons={
            [
              {
                text: 'Button 1',
                onClick: () => console.log('Clicked Button 1!'),
              },
              {
                text: 'Button 2',
                onClick: () => console.log('Clicked Button 2!'),
              },
              {
                text: 'Button 3',
                onClick: () => console.log('Clicked Button 3!'),
              },
            ]
          }
        />
      </div>
    </>
  ))

  .add('Color and Variant', () => (
    <>
      <ButtonGroup
        color={select('color', colors)}
        variant={select('variant', variants)}
        buttons={
          [
            {
              text: 'Button 1',
              onClick: () => console.log('Clicked Button 1!'),
            },
            {
              text: 'Button 2',
              onClick: () => console.log('Clicked Button 2!'),
            },
            {
              text: 'Button 3',
              onClick: () => console.log('Clicked Button 2!'),
            },
          ]
        }
      />
    </>
  ));
