import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import logo from "../../assets/logo.png";
import "./styles.css";
import { IconContext } from "react-icons/lib";

const Header = () => (
  <header className="main-header">
    <img src={logo} alt="React Movies" />
    <div className="main-menu">
      <form action="">
        <IconContext.Provider value={{ color: "#c0392b", size: "24px" }}>
          <FiSearch />
        </IconContext.Provider>
        <input type="text" placeholder="Pesquisar" />
      </form>

      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/movies">Filmes</Link>
        </li>
        <li>
          <Link to="/shows">Séries</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
