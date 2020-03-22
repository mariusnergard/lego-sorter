import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const HeaderInPaper = ({
  children,
  gutterBottom,
  variant,
  align,
  noWrap,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography
        variant={variant}
        component="h2"
        gutterBottom={gutterBottom}
        align={align}
        noWrap={noWrap}
      >
        {children}
      </Typography>
    </Paper>
  );
};

HeaderInPaper.propTypes = {
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  variant: PropTypes.string,
  align: PropTypes.string,
};

HeaderInPaper.defaultProps = {
  gutterBottom: false,
  noWrap: true,
  children: false,
  variant: 'h2',
  align: 'left',
};

export default HeaderInPaper;
