import React from 'react';
import moment from 'moment';
import TextField from '../../../inputs/TextField';

const renderTextField = ({
  step,
  useValues,
  setValues,
  useError,
  setValueLabel,
  currentStep,
  i,
}) => {
  const {
    label,
    id,
    displayIf,
    multiline,
    defaultValue,
  } = step;

  const error = useError[id] || false;

  if (displayIf && useValues[displayIf[0]] !== displayIf[1]) return null;
  const MUIMultiline = (multiline) ? { multiline: true, rows: 4, variant: 'outlined' } : {};

  const handleChange = (val) => {
    setValues(prevState => ({ ...prevState, [id]: val }));
    setValueLabel(prev => ({
      ...prev,
      [id]: {
        label, value: val, step: currentStep, order: i,
      },
    }));
  };

  if (defaultValue && !useValues[id]) {
    let defVal = defaultValue || '';
    const vars = defaultValue.match(/##.*?##/g);
    vars.forEach((v) => {
      defVal = defVal.replace(v, useValues[v.replace(/##/g, '')]);
    });
    defVal = defVal.replace(/%%pathDate%%/g, moment().format('YYYYMMDD'));
    handleChange(defVal);
  }

  const grouped = (displayIf && useValues[displayIf[0]] === displayIf[1]) ? 'grouped' : '';

  const value = useValues[id] || '';

  return (
    <TextField
      customClass={grouped || ''}
      key={id}
      id={id}
      value={value}
      label={label || false}
      onChange={val => handleChange(val)}
      error={error}
      {...MUIMultiline}
    />
  );
};




export default renderTextField;
