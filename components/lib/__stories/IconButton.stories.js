import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  withKnobs,
  select,
  boolean,
} from '@storybook/addon-knobs';
import DeleteIcon from '@material-ui/icons/Delete';
import Autorenew from '@material-ui/icons/Autorenew';
import Extension from '@material-ui/icons/Extension';
import Forum from '@material-ui/icons/Forum';
import FileCopyIcon from '@material-ui/core/SvgIcon/SvgIcon';
import IconButton from '../buttons/IconButton';

const colors = ['default', 'primary', 'secondary'];
const iconSizes = ['small', 'medium'];

storiesOf('components/lib/IconButton', module)
  .addDecorator(withKnobs)

  .add('Icon button', () => (
    <>
      <p>Pass icons from https://material-ui.com/components/material-icons/ as children</p>
      <IconButton>
        <DeleteIcon />
      </IconButton>
      <IconButton color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" size="medium">
        <Extension />
      </IconButton>
      <IconButton disabled>
        <Autorenew />
      </IconButton>
      <IconButton size="small">
        <FileCopyIcon />
      </IconButton>
      <div>
        <IconButton
          size={select('sizes', iconSizes)}
          color={select('color', colors)}
          disabled={boolean('disabled')}
          edge={select('edge', [false, 'start', 'end'])}
        >
          <Forum />
        </IconButton>
      </div>
    </>
  ));
