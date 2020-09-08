import React, { Component } from "react";

import "./styles.css";

export default class Cast extends Component {
  render() {
    const cast = this.props.cast;
    return (
      <div className="main_cast">
        <h2>Elenco</h2>
        <div className="casts">
          {cast.map((item) => (
            <div key={item.cast_id} className="cast">
              <img
                src={`https://image.tmdb.org/t/p/w150_and_h150_bestv2${item.profile_path}`}
                alt={item.name}
              />
              <div className="info">
                <h1>{item.name}</h1>
                <h2>{item.character}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
