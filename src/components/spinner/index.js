import React from 'react';
import spinner from './spinner.gif';
import './spinner.scss';

export default ({isLoading}) => {
  return isLoading && (
    <div className={" spinner-container"}>
      <img src={spinner} alt=""/>
    </div>
  );
};
