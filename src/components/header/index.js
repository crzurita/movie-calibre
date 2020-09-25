import React from 'react';
import {withRouter} from 'react-router-dom';
import './index.scss';

export default withRouter(({location, history, isVisible = true, onSearchChange}) => {
  
  return(
    <header className="header">
      <div className="header__searcher flex">
        <h1 className="header__title">Movie Calibre</h1>
        <form className={`header__form header__form--${location.pathname.match('movie-detail') ? 'invisible' : 'visible'}`}>
          <input onChange={onSearchChange} className="form-input" type="text" placeholder="Search Movie" />
        </form>
        <div 
          style={{cursor: 'pointer', display: location.pathname.length > 1 ? 'block' : 'none'}}
          onClick={history.goBack}>
          <p>Go back</p>
        </div>
      </div>
    </header>
  )
})