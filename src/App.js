import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { getMovies } from './services/movies';
import Header from './components/header';
import Home from './pages/home/Home';
import MovieDetail from './pages/movie-detail/MovieDetail';
import Spinner from './components/spinner';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: [],
      filteredMovies: []
    }
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(e) {
    const search = e.currentTarget.value;
    if (search.length >= 2) {
      this.setState({
        ...this.state,
        filteredMovies: this.state.movies.filter(movie => movie.title.match(search))
      })
    } else if(search === '') {
      this.setState({
        ...this.state,
        filteredMovies: [...this.state.movies]
      })
    }
  }

  componentDidMount() {
    getMovies()
      .then(movies => {
        this.setState({
          movies: movies.data,
          filteredMovies: movies.data,
          isLoading: false})
      })
  }
  
  render() {

    return(
      <BrowserRouter>
        <div className="app">
          <Spinner isLoading={this.state.isLoading} />
          <Header onSearchChange={this.onSearchChange} />
          <main className="app__main padding-15">
            <Switch>
              <Route exact path="/" render={() => <Home moviesList={this.state.filteredMovies} /> } />
              <Route path="/movie-detail/:id" children={ <MovieDetail /> } />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
