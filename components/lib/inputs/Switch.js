import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MUIFormControlLabel from '@material-ui/core/FormControlLabel';
import MUISwitch from '@material-ui/core/Switch';
import WithStyles from '../../styles/GlobalCSSVars';
import guidGenerator from '../../../lib/guidGenerator';

const Switch = ({
  label,
  id,
  name,
  value,
  onChange,
  color,
}) => {
  const switchId = id || guidGenerator();
  const [useValue, setValue] = useState(value);

  const handleChange = (e) => {
    setValue(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <>
      <WithStyles customStyles={{}} />
      <MUIFormControlLabel
        control={
          <MUISwitch
            checked={useValue}
            onChange={handleChange}
            value={id}
            name={name}
            color={color}
            id={switchId}
          />
        }
        label={label}
      />
    </>
  );
};

Switch.propTypes = {
  label: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
};

Switch.defaultProps = {
  label: '',
  id: false,
  color: 'primary',
  name: undefined,
  onChange: () => null,
};

export default Switch;
