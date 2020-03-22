import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MUIButton from '@material-ui/core/Button';
import WithStyles from '../../styles/GlobalCSSVars';

// Todo - PropTypes


const Button = ({
  variant,
  text,
  onClick,
  children,
  size,
  editMode,
  color,
  style,
  disabled,
  className,
  startIcon,
  fullWidth,
  classes,
}) => {
  // if (text !== '' && children) console.warn('Children given to the <Button> component will always override "text" prop!');

  const MUIColor = color || 'default';
  const MUISize = size || 'medium';
  const MUIDisabled = disabled || false;
  const MUIVariant = variant || 'outlined';
  const MUIStartIcon = startIcon || false;
  const MUIFullWidth = fullWidth || false;
  const MUIClasses = classes || {};

  return (
    <>
      <WithStyles customStyles={{}} />
      <MUIButton
        color={MUIColor}
        size={MUISize}
        className={className}
        style={style}
        classes={MUIClasses}
        disabled={MUIDisabled}
        variant={MUIVariant}
        startIcon={MUIStartIcon}
        onClick={onClick}
        fullWidth={MUIFullWidth}
      >
        {children}
      </MUIButton>
    </>
  );
};


export default Button;
