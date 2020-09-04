import React, { Component } from "react";

import Banner from "../../components/Banner";
import ShowsPopular from "../../components/ShowsPopular";

export default class Shows extends Component {
  render() {
    return (
      <div className="main">
        <Banner />
        <ShowsPopular total="18" />
      </div>
    );
  }
}
