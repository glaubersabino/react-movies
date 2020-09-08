import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Movies from "./pages/movies";
import Movie from "./pages/movie";
import Shows from "./pages/shows";
import Show from "./pages/show";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/movie/:id" component={Movie}></Route>
      <Route path="/shows" component={Shows}></Route>
      <Route path="/show/:id" component={Show}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
