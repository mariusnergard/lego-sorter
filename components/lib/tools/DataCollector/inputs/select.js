import React from 'react';
import Select from '../../../inputs/Select';

const renderSelect = ({ step, useValues, setValues, useError, setValueLabel, currentStep, i }) => {
  const {
    label,
    id,
    multiple,
    values,
    tag,
    displayIf,
  } = step;

  if (displayIf && useValues[displayIf[0]] !== displayIf[1]) return null;

  const error = useError[id] || false;

  const grouped = (displayIf && useValues[displayIf[0]] === displayIf[1]) ? 'grouped' : '';

  const value = useValues[id] || ((multiple) ? [] : '');

  const filterOptions = () => values.filter((option) => {
    if (!multiple) return true;
    if (!option.disabledIf) return true;
    if (!useValues.id) return true;
    if (
      Array.isArray(option.disabledIf) && Array.isArray(useValues.id)
      && !option.disabledIf.some(d => useValues.id.includes(d))) {
      return true;
    }
    if (!Array.isArray(option.disabledIf) && Array.isArray(useValues.id) && !useValues.id.includes(option.disabledIf)) return true;
    if (!Array.isArray(option.disabledIf) && useValues.id !== option.disabledIf) return true;
  });

  const handleChange = (val) => {
    setValues(prevState => ({ ...prevState, [id]: val }));
    const labels = (!Array.isArray(val)) ? values.find(opt => opt.value == val).label : val.map(v => values.find(opt => opt.value == v).label).join(', ');
    setValueLabel(prev => ({ ...prev, [id]: { label, value: labels, step: currentStep, order: i } }));
  };

  return (
    <Select
      customClass={grouped || ''}
      key={id}
      options={filterOptions()}
      id={id}
      value={value}
      label={label || false}
      multiple={multiple || false}
      tag={tag || false}
      onChange={val => handleChange(val)}
      error={error}
    />
  );
};

export default renderSelect;
