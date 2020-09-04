import React, { Component } from "react";
import { FiPlus, FiPlay, FiThumbsUp, FiCalendar } from "react-icons/fi";
import api from "../../services/api";

import "./styles.css";

import Header from "../../components/Header";

export default class Banner extends Component {
  state = {
    banners: [],
    bannersGenres: [],
    genres: [],
  };

  componentDidMount() {
    this.loadBanners();
    this.loadGenres();

    this.updateInterval = setInterval(() => {
      this.loadBanners();
    }, 5000);
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
    this.setState({ genres: UniqueGenres });
  };

  fuck = () => {
    const { genres } = this.state;
    const { bannersGenres } = this.state;
    const genresString = [];

    for (let index = 0; index < bannersGenres.length; index++) {
      for (let x = 0; x < genres.length; x++) {
        if (bannersGenres[index] === genres[x].id) {
          genresString.push(genres[x].name);
        }
      }
    }
    return genresString.join(", ");
  };

  render() {
    const { banners } = this.state;
    var bannersDate = new Date(
      banners.release_date ? banners.release_date : banners.first_air_date
    );

    const bannerStyle = {
      background: `linear-gradient(0deg, rgba(45, 52, 54, 1) 0%, rgba(45, 52, 54, 0.8911939775910365) 10%, rgba(45, 52, 54, 0) 25%, rgba(45, 52, 54, 0) 74%, rgba(45, 52, 54, 0.8547794117647058) 100%), url("https://image.tmdb.org/t/p/original${banners.backdrop_path}")`,
    };

    return (
      <div className="poster-bg" style={bannerStyle}>
        <Header />
        <div className="poster-featured-info">
          <h1>{banners.title ? banners.title : banners.name}</h1>
          <p>{banners.overview}</p>
          <div className="info">
            <div className="date">
              <p>
                <FiThumbsUp />
                {banners.vote_average * 10}%
              </p>
              <p>
                <FiCalendar /> {bannersDate.toLocaleDateString("pt-BR")}
              </p>
            </div>
            <div className="categories">
              <p>{this.fuck()}</p>
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
