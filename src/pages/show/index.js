import React, { Component } from "react";
import api from "../../services/api";

import Banner from "../../components/Banner";

export default class Show extends Component {
  state = {
    show: [],
    genres: [],
  };

  componentDidMount() {
    this.loadShow();
  }

  loadShow = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_SECRET_API}&language=pt-BR`
    );
    this.setState({ show: response.data, genres: response.data.genres });
  };

  render() {
    const { show, genres } = this.state;
    return (
      <div className="main">
        <Banner data={show} gen={genres} />
      </div>
    );
  }
}
