import React from "react";

import logo from "../../logo.png";
import "./styles.css";

const Header = () => (
  <header className="main-header">
    <img src={logo} alt="React Movies" />
    <div className="main-menu">
      <input type="text" placeholder="Pesquisar" />
      <ul>
        <li>Início</li>
        <li>Filmes</li>
        <li>Séries</li>
      </ul>
    </div>
  </header>
);

export default Header;
