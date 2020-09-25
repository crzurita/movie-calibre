import movies from '../mocks';
import axios from 'axios';

let getMovies;
let getMovieById;
let rateMovie;

if (process.env.NODE_ENV === 'production') {
  getMovies = () => new Promise(resolve => {
    setTimeout(() => resolve({data: movies}), 1000);
  });
  
  getMovieById = (id) => new Promise(resolve => {
    setTimeout(() => resolve({data: movies.find(movie => movie.id === id)}), 1000)
  })
} else {
  const endpoint = 'http://localhost:8000/api/movies'

  getMovies = () => axios.get(endpoint);
  getMovieById = id => axios.get(`${endpoint}/${id}`);
  rateMovie = rate => axios.post('http://localhost:8000/api/rates', rate);
}

export {
  getMovies,
  getMovieById,
  rateMovie
}