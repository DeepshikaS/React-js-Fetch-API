import React, { Component } from "react";
//import Fr from "./components/Fetch_api";
import "bootstrap/dist/css/bootstrap.min.css";
import Quotegen from "./components/Quotegen/Quotegen";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div id="navbar">
          <a href="Quotegen">Quote Generator</a>
          <a href="#">Random Person</a>
        </div>
        <BrowserRouter>
          <Switch>
            <Route path="/Quotegen" component={Quotegen} />
            {/*<Route path="/Person" component={Person} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
