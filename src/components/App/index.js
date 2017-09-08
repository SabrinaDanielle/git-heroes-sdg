import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Heroes from "../Heroes";
import Dashboard from "../dashboard/dashboard";
import HeroForm from "../Heroes/HeroesForm";
import AddHero from "../Heroes/addHero";

import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <h1>Git Tour of Heroes</h1>
          <nav>
            <NavLink exact to="/" activeClassName="active">
              Dashboard
            </NavLink>
            <NavLink exact to="/heroes" activeClassName="active">
              Heroes
            </NavLink>
            <NavLink to="/heroes/add" activeClassName="active">
              Add Hero
            </NavLink>
          </nav>
          <hr />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/heroes" component={Heroes} />
          <Route path="/heroes/add" component={AddHero} />
          <Route path={"/heroes/details/:heroId"} component={HeroForm} />
        </div>
      </Router>
    );
  }
}

export default App;