import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import MovieCard from '../../components/movie-card';

export default ({ moviesList }) => (
  <div className="home">
    <div className="home__movies grid">
      {moviesList && (
        moviesList.length ? moviesList.map(movie => (
          <Link key={movie.id} to={`/movie-detail/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        )) : <h1>No movies available :(</h1>
      )}
    </div>
  </div>
)