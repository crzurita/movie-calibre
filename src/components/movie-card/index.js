import React from 'react';
import MovieRating from '../movie-rating';
import './index.scss';

export default ({movie, onlyPoster}) => (
  <div className="movie-card padding-15">
    <div className="movie-card__poster">
      <img src={movie.image} alt={movie.title} />
    </div>
    
    <p className="movie-card__title">
      {movie.title}
    </p>
    { !onlyPoster && <div className="movie-card__rating">
      <MovieRating rating={movie.user_rating} />
    </div> }
  </div>
)