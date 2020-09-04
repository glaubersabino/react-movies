import React, { Component } from "react";

import Banner from "../../components/Banner";
import MoviesPopular from "../../components/MoviesPopular";
import ShowsPopular from "../../components/ShowsPopular";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Banner />
        <MoviesPopular />
        <ShowsPopular />
      </div>
    );
  }
}
