import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const PaperWithPadding = ({
  children,
  asButton,
}) => {
  const classes = useStyles();
  const [useElevation, setElevation] = useState(1);

  const raiseElevation = (asButton) ? () => {
    setElevation(10);
  } : () => null;

  const lowerElevation = () => {
    setElevation(1);
  };

  const style = (asButton) ? {
    cursor: 'pointer',
  } : {};

  return (
    <Paper
      className={classes.root}
      style={style}
      elevation={useElevation}
      onMouseEnter={raiseElevation}
      onMouseLeave={lowerElevation}
    >
      {children}
    </Paper>
  );
};

PaperWithPadding.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  asButton: PropTypes.bool,
};

PaperWithPadding.defaultProps = {
  children: false,
  asButton: false,
};

export default PaperWithPadding;
