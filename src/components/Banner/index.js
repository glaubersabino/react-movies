import React, { Component } from "react";
import { FiPlus, FiPlay, FiThumbsUp, FiCalendar } from "react-icons/fi";
import api from "../../services/api";

import "./styles.css";

import Header from "../../components/Header";

export default class Banner extends Component {
  state = {
    banners: [],
    bannersGenres: [],
    genresAll: [],
  };

  componentDidMount() {
    this.loadGenres();

    if (!this.props.data) {
      this.loadBanners();

      this.updateInterval = setInterval(() => {
        this.loadBanners();
      }, 5000);
    }
  }

  loadBanners = async () => {
    const movies = await api.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_SECRET_API}&language=pt-BR&page=1`
    );
    const shows = await api.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_SECRET_API}&language=pt-BR&page=1
    `);

    const moviesData = movies.data.results.slice(0, 3);
    const showsData = shows.data.results.slice(0, 3);

    const populars = moviesData.concat(showsData);
    const random = Math.floor(Math.random() * populars.length);

    this.setState({
      banners: populars[random],
      bannersGenres: populars[random].genre_ids,
    });
  };

  loadGenres = async () => {
    const moviesGenres = await api.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_SECRET_API}&language=pt-BR`
    );
    const showsGenres = await api.get(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_SECRET_API}&language=pt-BR`
    );

    const mGenres = moviesGenres.data.genres;
    const sGenres = showsGenres.data.genres;
    const Genres = mGenres.concat(sGenres);
    const UniqueGenres = [];

    for (let index = 0; index < Genres.length; index++) {
      const element = Genres[index];
      const search = UniqueGenres.find((item) => item.id === element.id);

      if (!search) {
        UniqueGenres.push(Genres[index]);
      }
    }
    this.setState({ genresAll: UniqueGenres });
  };

  showGenres = () => {
    const { genresAll } = this.state;
    const genresString = [];

    // Verifica se foram informadas propriedades ao componente, se sim, gera o banner single do filme ou série.
    if (this.props.data) {
      const g = this.props.gen;
      for (let x = 0; x < g.length; x++) {
        console.log(g[x].name);
        genresString.push(g[x].name);
      }
    } else {
      const { bannersGenres } = this.state;
      for (let index = 0; index < bannersGenres.length; index++) {
        for (let x = 0; x < genresAll.length; x++) {
          if (bannersGenres[index] === genresAll[x].id) {
            genresString.push(genresAll[x].name);
          }
        }
      }
    }

    return genresString.join(", ");
  };

  showDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("pt-BR");
  };

  showTitle = (single, multi) => {
    let title = "";

    if (single) {
      title = single.title ? single.title : single.name;
    } else {
      title = multi.title ? multi.title : multi.name;
    }

    return title;
  };

  render() {
    const singleBanner = this.props.data;
    const { banners } = this.state;
    const date = singleBanner
      ? singleBanner.release_date
      : banners.release_date;

    const bannerStyle = {
      background: `linear-gradient(0deg, rgba(45, 52, 54, 1) 0%, rgba(45, 52, 54, 0.8911939775910365) 10%, rgba(45, 52, 54, 0) 25%, rgba(45, 52, 54, 0) 74%, rgba(45, 52, 54, 0.8547794117647058) 100%), url("https://image.tmdb.org/t/p/original${
        singleBanner ? singleBanner.backdrop_path : banners.backdrop_path
      }")`,
    };

    if (this.props.data) {
      console.log(this.props.data.title);
    }

    return (
      <div className="poster-bg" style={bannerStyle}>
        <Header />
        <div className="poster-featured-info">
          <h1>{this.showTitle(singleBanner, banners)}</h1>
          <p>{singleBanner ? singleBanner.overview : banners.overview}</p>
          <div className="info">
            <div className="date">
              <p>
                <FiThumbsUp />
                {(singleBanner
                  ? singleBanner.vote_average
                  : banners.singleBanner) * 10}
                %
              </p>
              <p>
                <FiCalendar /> {this.showDate(date)}
              </p>
            </div>
            <div className="categories">
              <p>{this.showGenres()}</p>
            </div>
          </div>
          <div className="actions">
            <button className="btn btn-danger">
              <FiPlay /> Assistir
            </button>
            <button className="btn btn-opacity">
              <FiPlus /> Ver mais
            </button>
          </div>
        </div>
      </div>
    );
  }
}
