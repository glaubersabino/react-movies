import React, { Component } from "react";
import { FiPlus, FiPlay } from "react-icons/fi";

import "./styles.css";

import Header from "../../components/Header";
import MoviesPopular from "../../components/MoviesPopular";
import ShowsPopular from "../../components/ShowsPopular";

export default class Main extends Component {
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
        {/* <ShowsPopular /> */}
      </div>
    );
  }
}
