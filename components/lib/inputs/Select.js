import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MUISelect from '@material-ui/core/Select';
import MUIInputLabel from '@material-ui/core/InputLabel';
import MUIFormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import MUIInput from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import WithStyles from '../../styles/GlobalCSSVars';
import guidGenerator from '../../../lib/guidGenerator';

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
    borderRadius: 10,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Select = ({
  label,
  id,
  multiple,
  name,
  value,
  chip,
  options,
  tag,
  onChange,
  variant,
  customClass,
  error,
}) => {
  const classes = useStyles();
  const [useValue, setValue] = React.useState(value);
  // Label
  const labelRandomId = guidGenerator();
  const displayLabel = (label) ? <MUIInputLabel id={labelRandomId}>{label}</MUIInputLabel> : '';

  const selectId = id || guidGenerator();

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  const renderValueTypes = {

    chipMultiple: selected => (
      <div className={classes.chips}>
        {selected.map(val => (
          <Chip
            key={val}
            label={options.find(o => o.value === val).label}
            className={classes.chip}
          />
        ))}
      </div>
    ),

    multiple: selected => selected.map(val => options.find(o => o.value === val).label).join(', '),
    default: (selected) => {
      const selection = options.find(o => o.value === selected);
      if (selection) return selection.label;
      return '';
    },
  };

  const renderValue = (selected) => {
    if (multiple && chip && Array.isArray(selected)) return renderValueTypes.chipMultiple(selected);
    if (multiple && Array.isArray(selected)) return renderValueTypes.multiple(selected);
    return renderValueTypes.default(selected);
  };


  // Render options
  const renderOptions = (tag)
    ? options.map(item => (
      <MenuItem key={item.value} value={item.value}>
        <Checkbox checked={Array.isArray(useValue) ? useValue.indexOf(item.value) > -1 : useValue === item.value} />
        <ListItemText primary={item.label} />
      </MenuItem>
    ))
    : options.map(item => (
      <MenuItem key={item.value} value={item.value}>
        {item.label}
      </MenuItem>
    ));


  return (
    <>
      <WithStyles customStyles={{}} />
      <MUIFormControl className={`${customClass}`} error={error}>
        {displayLabel}
        <MUISelect
          labelId={labelRandomId}
          variant={variant}
          id={selectId}
          multiple={multiple}
          name={name}
          // input={input}
          value={useValue}
          MenuProps={MenuProps}
          onChange={handleChange}
          renderValue={renderValue}
        >
          {renderOptions}
        </MUISelect>
        {error && <FormHelperText>{error}</FormHelperText>}
      </MUIFormControl>
    </>
  );
};

Select.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  multiple: PropTypes.bool,
  tag: PropTypes.bool,
  variant: PropTypes.string,
  customClass: PropTypes.string,
  chip: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.number,
        PropTypes.array,
      ]),
      label: PropTypes.string,
    }),
  ).isRequired,
};

Select.defaultProps = {
  label: false,
  id: false,
  chip: false,
  tag: false,
  error: false,
  name: undefined,
  multiple: false,
  variant: 'standard',
  customClass: '',
  onChange: () => null,
};

export default Select;
