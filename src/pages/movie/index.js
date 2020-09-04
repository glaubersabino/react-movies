import React, { Component } from "react";
import api from "../../services/api";

import Banner from "../../components/Banner";

export default class Movie extends Component {
  state = {
    movie: [],
    genres: [],
  };

  componentDidMount() {
    this.loadMovie();
  }

  loadMovie = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(
      `/movie/${id}?api_key=${process.env.REACT_APP_SECRET_API}&language=pt-BR`
    );
    this.setState({ movie: response.data, genres: response.data.genres });
  };

  render() {
    const { movie, genres } = this.state;
    return (
      <div className="main">
        <Banner data={movie} gen={genres} />
      </div>
    );
  }
}
