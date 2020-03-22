import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MUIButtonGroup from '@material-ui/core/ButtonGroup';
import MUIButton from '@material-ui/core/Button';
import WithStyles from '../../styles/GlobalCSSVars';

// Todo - PropTypes

const ButtonGroup = ({
  children,
  classes,
  color,
  disabled,
  fullWidth,
  orientation,
  size,
  variant,
  onClick,
  style,
  className,
  buttons,
}) => {
  const MUIColor = color || 'default';
  const MUISize = size || 'medium';
  const MUIDisabled = disabled || false;
  const MUIVariant = variant || 'outlined';
  const MUIOrientation = orientation || 'horizontal';

  const renderButtons = buttons.map(button => <MUIButton onClick={button.onClick}>{button.text}</MUIButton>);

  return (
    <>
      <WithStyles customStyles={{}} />
      <MUIButtonGroup
        color={MUIColor}
        size={MUISize}
        className={className}
        style={style}
        disabled={MUIDisabled}
        variant={MUIVariant}
        orientation={MUIOrientation}
      >
        {renderButtons}
      </MUIButtonGroup>
    </>
  );
};


export default ButtonGroup;
