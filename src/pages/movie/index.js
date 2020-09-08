import React, { Component } from "react";
import api from "../../services/api";

import Banner from "../../components/Banner";
import Cast from "../../components/Cast";
import MoviesSimilar from "../../components/MoviesSimilar";

export default class Movie extends Component {
  state = {
    movie: [],
    genres: [],
    cast: [],
  };

  componentDidMount() {
    this.loadMovie();
    this.loadCast();
  }

  loadMovie = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(
      `/movie/${id}?api_key=${process.env.REACT_APP_SECRET_API}&language=pt-BR`
    );
    this.setState({ movie: response.data, genres: response.data.genres });
  };

  loadCast = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_SECRET_API}`
    );

    this.setState({ cast: response.data.cast });
  };

  render() {
    const { movie, genres, cast } = this.state;
    const { id } = this.props.match.params;

    return (
      <div className="main">
        <Banner data={movie} gen={genres} />
        <Cast cast={cast} />
        <MoviesSimilar id={id} />
      </div>
    );
  }
}
