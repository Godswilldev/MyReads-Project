import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/search"
            render={(props) => <Search {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
