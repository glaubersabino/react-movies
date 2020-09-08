import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default class MoviesSimilar extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.loadSimilar();
  }

  loadSimilar = async () => {
    const id = this.props.id;
    const response = await api.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_SECRET_API}&language=pt-BR&page=1`
    );
    const similar = response.data.results.slice(0, 6);

    this.setState({ movies: similar });
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="main-posters no-margin">
        <h2>Filmes similares</h2>

        <div className="posters">
          {movies.slice(0, this.props.total).map((movie) => (
            <Link to={`/movie/${movie.id}`}>
              <div key={movie.id} className="poster">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
