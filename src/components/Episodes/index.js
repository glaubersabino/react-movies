import React, { Component } from "react";
import "./styles.css";
import api from "../../services/api";

export default class Episodes extends Component {
  state = {
    episodes: [],
  };

  componentDidMount() {
    this.loadEpisodes();
  }

  loadEpisodes = async () => {
    const showId = this.props.showId;
    const season = this.props.season;

    const response = await api.get(
      `https://api.themoviedb.org/3/tv/${showId}/season/${season}?api_key=${process.env.REACT_APP_SECRET_API}&language=pt-br`
    );

    this.setState({ episodes: response.data.episodes });
  };

  render() {
    const { episodes } = this.state;

    return (
      <div className="season">
        {episodes.map((episode) => (
          <div className="card">
            <img
              src={`https://image.tmdb.org/t/p/w300${episode.still_path}`}
              alt={episode.name}
            />
            <p className="number">{episode.episode_number}</p>
            <div className="overlay">
              <p>{episode.name}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
