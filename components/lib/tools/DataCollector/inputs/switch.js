import React from 'react';
import Switch from '../../../inputs/Switch';

const renderSwitch = ({ step, useValues, setValues, useError, setValueLabel, currentStep, i }) => {
  const {
    label,
    id,
    displayIf,
  } = step;
  if (displayIf && useValues[displayIf[0]] !== displayIf[1]) return null;

  const grouped = (displayIf && useValues[displayIf[0]] === displayIf[1]) ? 'grouped' : '';

  const value = useValues[id] || false;

  const handleChange = (val) => {
    setValues(prevState => ({ ...prevState, [id]: val }));
    setValueLabel(prev => ({ ...prev, [id]: { label, value: `${val}`, step: currentStep, order: i } }));
  };

  return (
    <Switch
      className={grouped || ''}
      key={id}
      id={id}
      label={label}
      value={value}
      onChange={handleChange}
    />
  );
};

export default renderSwitch;
