import React from "react";

import logo from "../../logo.png";
import "./styles.css";

const Header = () => (
  <header className="main-header">
    <img src={logo} alt="React Movies" />
    <div className="main-menu">
      <input type="text" placeholder="Pesquisar" />
      <ul>
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Filmes</a>
        </li>
        <li>
          <a href="#">Séries</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
