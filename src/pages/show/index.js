import React, { Component } from "react";
import api from "../../services/api";

import Banner from "../../components/Banner";
import Cast from "../../components/Cast";

export default class Show extends Component {
  state = {
    show: [],
    genres: [],
    cast: [],
  };

  componentDidMount() {
    this.loadShow();
    this.loadCast();
  }

  loadShow = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_SECRET_API}&language=pt-BR`
    );
    this.setState({ show: response.data, genres: response.data.genres });
  };

  loadCast = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_SECRET_API}`
    );

    this.setState({ cast: response.data.cast });
  };

  render() {
    const { show, genres, cast } = this.state;
    return (
      <div className="main">
        <Banner data={show} gen={genres} />
        <Cast cast={cast} />
      </div>
    );
  }
}
