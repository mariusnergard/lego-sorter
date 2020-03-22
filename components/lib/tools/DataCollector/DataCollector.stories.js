import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  withKnobs,
  select,
  boolean,
} from '@storybook/addon-knobs';
import DataCollector from './DataCollector';
import exampleConf from './exampleConf';

storiesOf('components/lib/tool/DataCollector', module)
  .addDecorator(withKnobs)

  .add('Default', () => (
    <>
      <DataCollector conf={exampleConf} handleSave={data => console.log(data)} />
    </>
  ));

