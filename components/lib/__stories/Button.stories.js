import React from 'react';
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
import DeleteIcon from '@material-ui/icons/Delete';
import Autorenew from '@material-ui/icons/Autorenew';
import Extension from '@material-ui/icons/Extension';
import Forum from '@material-ui/icons/Forum';
import Button from '../buttons/Button';
import IconButton from '../buttons/IconButton';

// export default { title: 'Button' };

// export const button = () => (
//   <>
//     <WithStyles customStyles={{}} />
//     <Button color="mainColor">
//       Test
//     </Button>
//   </>
// );


const colors = ['default', 'primary', 'secondary'];
const sizes = ['small', 'medium', 'large'];
const iconSizes = ['small', 'medium'];
const variants = ['text', 'outlined', 'contained'];


const marginStyle = {
  margin: '10px',
};

storiesOf('components/lib/Button', module)
  .addDecorator(withKnobs)

  .add('Default', () => <Button>This is the default state</Button>)

  .add('Disabled', () => <Button disabled>This is disabled</Button>)

  .add('Variant', () => (
    <>
      <Button variant="text" color="primary" style={marginStyle}>text</Button>
      <Button variant="outlined" color="primary" style={marginStyle}>outlined</Button>
      <Button variant="contained" color="primary" style={marginStyle}>contained</Button>
      <div>
        <Button color="primary" variant={select('variant', variants)} style={marginStyle}>Turn the knob!</Button>
      </div>
    </>
  ))

  .add('Color', () => (
    <>
      <Button color="default" style={marginStyle}>default</Button>
      <Button color="primary" style={marginStyle}>primary</Button>
      <Button color="secondary" style={marginStyle}>secondary</Button>
      <div>
        <Button color={select('color', colors)} variant={select('variant', variants)} style={marginStyle}>Turn the knob!</Button>
      </div>
    </>
  ))

  .add('Size', () => (
    <>
      <Button size="small" style={marginStyle}>Small</Button>
      <Button size="medium" style={marginStyle}>Medium</Button>
      <Button size="large" style={marginStyle}>Large</Button>
      <div>
        <Button size={select('sizes', sizes)} style={marginStyle}>Turn the knob!</Button>
      </div>
    </>
  ))

  .add('Start Icon', () => (
    <>
      <Button startIcon={<DeleteIcon />} size="medium" style={marginStyle}>With icon</Button>
    </>
  ));
