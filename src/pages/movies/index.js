import React, { Component } from "react";

import Banner from "../../components/Banner";
import MoviesPopular from "../../components/MoviesPopular";

export default class Movies extends Component {
  render() {
    return (
      <div className="main">
        <Banner />
        <MoviesPopular total="18" />
      </div>
    );
  }
}
