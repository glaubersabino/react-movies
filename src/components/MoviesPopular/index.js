import React, { Component } from "react";
import { motion } from "framer-motion";
import api from "../../services/api";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default class MoviesPopular extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.loadPopularMovies();
  }

  loadPopularMovies = async () => {
    const response = await api.get(
      `/movie/popular?api_key=${process.env.REACT_APP_SECRET_API}&language=pt-BR&page=1`
    );
    console.log(response.data);
  };

  render() {
    return (
      <div className="main-posters">
        <h2>Filmes em destaque</h2>

        <motion.div
          className="posters"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <motion.div key={index} className="poster" variants={item}>
              <img
                src="https://image.tmdb.org/t/p/w200/dzOxNbbz1liFzHU1IPvdgUR647b.jpg"
                alt="The Boys"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
}
