import React from 'react';
import PropTypes from 'prop-types';
import MomentUtils from '@date-io/moment';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import guidGenerator from '../../../lib/guidGenerator';
import WithStyles from '../../styles/GlobalCSSVars';

const DatePicker = ({
  customClass,
  error,
  format,
  id,
  label,
  maxDate,
  minDate,
  onChange,
  value,
  variant,
}) => {
  const [useValue, setValue] = React.useState(value);

  const inputId = id || guidGenerator();
  const dateFormat = format || 'DD.MM.YYYY';

  const handleChange = (date) => {
    console.log(date);
    setValue(date.toString());
    onChange(new Date(date._d));
  };

  return (
    <>
      <WithStyles customStyles={{}} />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardDatePicker
          margin="normal"
          id={inputId}
          label={label}
          format={dateFormat}
          value={useValue}
          onChange={handleChange}
          variant={variant}
          minDate={minDate}
          maxDate={maxDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  format: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  variant: PropTypes.string,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
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

DatePicker.defaultProps = {
  label: '',
  format: false,
  id: false,
  error: false,
  minDate: new Date('1970-01-01'),
  maxDate: new Date('2100-01-01'),
  variant: 'dialog',
  customClass: '',
  onChange: () => null,
};

export default DatePicker;
