import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById, rateMovie } from '../../services/movies';
import './index.scss';
import MovieCard from '../../components/movie-card';
import MovieRating from '../../components/movie-rating';
import Button from '../../components/button';
import Spinner from '../../components/spinner';

export default () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [form, setForm] = useState({
    comment: '',
    rate: 0,
    movieId: id 
  })

  const onChange = e => {
    setForm({...form, comment: e.currentTarget.value})
  }

  const onSubmit = e => {
    e.preventDefault();
    rateMovie(form)
      .then(() => {
        alert('Thanks for send your feedback');
        setForm({
          comment: '',
          rate: 0,
          movieId: id
        })
      })
      .catch(err => alert('There was a problem, try again later'))
  }

  const onRateChange = rate => {
    setForm({...form, rate})
    
  }

  useEffect(() => {
    getMovieById(id)
    .then(movie => {
      setMovie(movie.data)
      setIsLoading(false);
    });
  }, [id])

  return (
    <div className="movie-details flex">
      <Spinner isLoading={isLoading} />
      {!movie ? <h1>There's not movies with that id</h1> : (
        <React.Fragment>
          <div className="movie-details__poster">
            <MovieCard movie={movie} onlyPoster />
          </div>
          <div className="movie-details__info padding-15">
            <div className="movie-details__plot">
              {movie.plot}
            </div>
            <ul className="movie-details__list">
              <li>Year {movie.year}</li>
              <li>Rated {movie.rated}</li>
              <li>Released on {movie.released_on}</li>
              <li>Genre {movie.genre}</li>
              <li>Director {movie.director}</li>
            </ul>
            <div className="movie-details__feedback">
              <MovieRating 
                  rating={form.rate}
                  onChangeValue={onRateChange} />
              <form onSubmit={onSubmit} className="movie-details__form">
                <textarea
                  className="form-input movie-details__comment"
                  name=""
                  placeholder="Comentario"
                  onChange={onChange}
                  value={form.comment} />
                  <div className="movie-details__button-container">
                    <Button 
                      disabled={form.comment === '' || form.rate === 0}
                      modifier="light">
                        Enviar
                    </Button>
                  </div>
              </form>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}