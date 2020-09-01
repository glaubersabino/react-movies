import React, { Component } from "react";
import { FiPlus, FiPlay } from "react-icons/fi";
import api from "../../services/api";

import "./styles.css";
import Header from "../../components/Header";
import MoviesPopular from "../../components/MoviesPopular";

export default class Main extends Component {
  state = {
    movies: [],
    shows: [],
  };

  componentDidMount() {
    this.loadMovies();
    this.loadTVShows();
  }

  loadMovies = async () => {
    const response = await api.get(
      `/movie/popular?api_key=${process.env.REACT_APP_SECRET_API}&language=pt-BR&page=1`
    );
    console.log(response.data);
  };

  loadTVShows = async () => {
    const response = await api.get(
      `/tv/popular?api_key=${process.env.REACT_APP_SECRET_API}&language=pt-BR&page=1`
    );
    console.log(response.data);
  };

  render() {
    return (
      <div className="main">
        <div className="poster-bg">
          <Header />
          <div className="poster-featured-info">
            <h1>Project Power</h1>
            <div className="info">
              <p>98%</p>
              <p>30/08/2020</p>
              <span>16+</span>
            </div>
            <div className="actions">
              <button className="btn btn-danger">
                <FiPlay /> Assistir
              </button>
              <button className="btn btn-opacity">
                <FiPlus /> Favoritos
              </button>
            </div>
          </div>
        </div>
        <MoviesPopular />
      </div>
    );
  }
}
