import React from "react";
import Routes from "./routes";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Routes />
      <div className="copyright">
        <h1>Desenvolvido por Glauber Albuquerque</h1>
        <div className="tmdb">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt=""
          />
          <p>
            Todos dados e imagens são atribuídos ao{" "}
            <a href="https://www.themoviedb.org/">TMDB</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
