import React, { Component } from "react";
import { FiPlus, FiPlay } from "react-icons/fi";
import api from "../../services/api";

import "./styles.css";
import Header from "../../components/Header";

export default class Main extends Component {
  state = {
    popular: [],
  };

  componentDidMount() {
    this.loadMovies();
    this.loadTVShows();
  }

  loadMovies = async () => {
    const response = await api.get(
      "/movie/popular?api_key=e8ebd3655dbc3593ecab47c3565d5d9d&language=pt-BR&page=1"
    );
    console.log(response.data);
  };

  loadTVShows = async () => {
    const response = await api.get(
      "/tv/popular?api_key=e8ebd3655dbc3593ecab47c3565d5d9d&language=pt-BR&page=1"
    );
    console.log(response.data);
  };

  render() {
    return (
      <div className="main">
        <div className="poster-bg">
          <Header />
          <div className="poster-featured-info">
            <h1>Harry Potter e a Pedra Filosofal</h1>
            <div className="info">
              <p>98%</p>
              <p>30/08/2020</p>
              <span>13+</span>
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

        <div className="posters">
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/dzOxNbbz1liFzHU1IPvdgUR647b.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/2yQUnpc1BXgesJrfcdoRa6jTAnA.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/f496cm9enuEsZkSPzCwnTESEK5s.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/b34jPzmB0wZy7EjUZoleXOl2RRI.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/vQiryp6LioFxQThywxbC6TuoDjy.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/g6n8G0xPnBVUIKKK41sNmbZB5h4.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/da22ZBmrDOXOCDRvr8Gic8ldhv4.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/v0wMKEEGaNc9evdqGYfIvoWXh24.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/Ag21otqbeynZPGjEbzyr3X5Us0j.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/7VRkmVB23rloRbZHsCRPscXlgQp.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/devZdyPRXMiN8HHiX7Y8s0LLEee.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/tX0o4AdHpidgniTWwfzK0dNTKrc.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/g6n7TdQSgozArIM0okXTjjCM9Np.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/89QTZmn34iwXYeCpVxhC9UrT8sX.jpg"
              alt="The Boys"
            />
          </div>
          <div className="poster">
            <img
              src="https://image.tmdb.org/t/p/w200/AkrRD3Lnwb82Stu2SpDKAerK6O2.jpg"
              alt="The Boys"
            />
          </div>
        </div>
      </div>
    );
  }
}
