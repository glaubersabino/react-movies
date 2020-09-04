import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Movies from "./pages/movies";
import Shows from "./pages/shows";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/shows" component={Shows}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
