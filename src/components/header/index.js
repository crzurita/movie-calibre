import React from 'react';
import {withRouter} from 'react-router-dom';
import './index.scss';

export default withRouter(({location, isVisible = true, onSearchChange}) => {
  
  return(
    <header className="header">
      <div className="header__searcher flex">
        <h1 className="header__title">Movie Calibre</h1>
        <form className={`header__form header__form--${location.pathname.match('movie-detail') ? 'invisible' : 'visible'}`}>
          <input onChange={onSearchChange} className="form-input" type="text" placeholder="Search Movie" />
        </form>
      </div>
    </header>
  )
})