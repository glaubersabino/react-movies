import React, { Component } from "react";
import api from "../../services/api";

export default class MoviesPopular extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.loadPopularMovies();
  }

  loadPopularMovies = async () => {
    const response = await api.get(
      `/movie/popular?api_key=${process.env.REACT_APP_SECRET_API}&language=pt-BR&page=1`
    );
    const { results } = response.data;
    this.setState({ movies: results });
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="main-posters">
        <h2>Filmes em destaque</h2>

        <div className="posters">
          {movies.slice(0, 12).map((movie) => (
            <div key={movie.id} className="poster">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
