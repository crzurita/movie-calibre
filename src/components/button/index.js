import React from 'react';
import './index.scss';

export default ({children, modifier = 'filled', ...props}) => (
  <button
    {...props}
    className={`button button--${modifier}--${props.disabled ? 'disabled' : 'enabled'}`}>
      {children
  }</button>
)