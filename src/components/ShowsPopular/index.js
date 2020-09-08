import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default class ShowsPopular extends Component {
  state = {
    shows: [],
  };

  componentDidMount() {
    this.loadPopularShows();
  }

  loadPopularShows = async () => {
    const response = await api.get(
      `/tv/popular?api_key=${process.env.REACT_APP_SECRET_API}&language=pt-BR&page=1`
    );
    this.setState({ shows: response.data.results });
  };

  render() {
    const { shows } = this.state;

    return (
      <div className="main-posters">
        <h2>Séries em destaque</h2>

        <div className="posters">
          {shows.slice(0, this.props.total).map((show) => (
            <Link to={`/show/${show.id}`}>
              <div key={show.id} className="poster">
                <img
                  src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
                  alt={show.name}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
