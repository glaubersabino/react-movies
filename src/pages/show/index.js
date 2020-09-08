import React, { Component } from "react";
import api from "../../services/api";

import Banner from "../../components/Banner";
import Cast from "../../components/Cast";
import Episodes from "../../components/Episodes";

export default class Show extends Component {
  state = {
    show: [],
    genres: [],
    seasons: [],
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

    this.setState({
      show: response.data,
      genres: response.data.genres,
      seasons: response.data.seasons,
    });
  };

  loadCast = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_SECRET_API}`
    );

    this.setState({ cast: response.data.cast });
  };

  render() {
    const { show, genres, seasons, cast } = this.state;
    const { id } = this.props.match.params;

    return (
      <div className="main">
        <Banner data={show} gen={genres} />
        <Cast cast={cast} />
        <div className="main_seasons">
          {seasons.map((season) => (
            <div key={season.id} className="seasons">
              <h2>{season.name}</h2>
              <Episodes showId={id} season={season.season_number} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
