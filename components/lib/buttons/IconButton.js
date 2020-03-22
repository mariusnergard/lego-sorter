import React from 'react';
import PropTypes from 'prop-types';
import MUIIconButton from '@material-ui/core/IconButton';
import WithStyles from '../../styles/GlobalCSSVars';

// const getIcon = (icon) => {
//   import Icon from `@material-ui/core/${icon}`;
// };
//

// Todo - PropTypes


const IconButton = ({
  children,
  classes,
  color,
  disabled,
  edge,
  size,
  onClick,
  style,
  className,
  icon,
}) => {
  const MUIColor = color || 'default';
  const MUISize = size || 'medium';
  const MUIDisabled = disabled || false;

  const Icon = icon;

  return (
    <>
      <WithStyles customStyles={{}} />
      <MUIIconButton
        color={MUIColor}
        size={MUISize}
        className={className}
        onClick={onClick}
        style={style}
        disabled={MUIDisabled}
      >
        {children}
      </MUIIconButton>
    </>
  );
};


export default IconButton;
