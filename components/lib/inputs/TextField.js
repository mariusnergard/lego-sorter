import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MUITextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import MUIFormControl from '@material-ui/core/FormControl/FormControl';
import WithStyles from '../../styles/GlobalCSSVars';
import guidGenerator from '../../../lib/guidGenerator';

const TextField = ({
  label,
  id,
  multiple,
  name,
  value,
  onChange,
  variant,
  customClass,
  error,
  multiline,
  rows,
  disabled,
  disabledVisible,
}) => {
  const [useValue, setValue] = React.useState(value);

  const inputId = id || guidGenerator();

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  const handler = (disabledVisible) ? () => null : handleChange;

  return (
    <>
      <WithStyles customStyles={{}} />
      <MUITextField
        variant={variant}
        id={inputId}
        multiple={multiple}
        name={name}
        label={label}
        value={useValue}
        onChange={handler}
        error={error}
        multiline={multiline}
        rows={rows}
        disabled={disabled}
      />
    </>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  variant: PropTypes.string,
  customClass: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
};

TextField.defaultProps = {
  label: '',
  id: false,
  disabled: false,
  name: undefined,
  rows: 4,
  error: false,
  multiple: false,
  variant: 'standard',
  multiline: false,
  customClass: '',
  onChange: () => null,
};

export default TextField;
