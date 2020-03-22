import React from 'react';
import TextField from '../../../inputs/TextField';
import DatePicker from '../../../inputs/DatePicker';
import moment from 'moment';

const renderDateField = ({
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
  } = step;

  const error = useError[id] || false;

  if (displayIf && useValues[displayIf[0]] !== displayIf[1]) return null;

  const grouped = (displayIf && useValues[displayIf[0]] === displayIf[1]) ? 'grouped' : '';

  const value = useValues[id] || null;

  const handleChange = (val) => {
    setValues(prevState => ({ ...prevState, [id]: val }));
    setValueLabel(prev => ({
      ...prev,
      [id]: {
        label, value: moment(val).format('DD.MM.YYYY'), step: currentStep, order: i,
      },
    }));
  };

  return (
    <DatePicker
      customClass={grouped || ''}
      key={id}
      id={id}
      value={value}
      minDate={new Date()}
      label={label || false}
      onChange={val => handleChange(val)}
      error={error}
    />
  );
};

export default renderDateField;
