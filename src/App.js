// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/common/customers";
import Rentals from "./components/common/rentals";
import NotFound from "./components/common/notFound";
import NavBar from "./components/common/NavBar";
import MovieForm from "./components/common/movieForm";
import LoginForm from "./components/loginForm";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <main className="container">
          <Switch>
            <Route path="/loginForm" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/notfound" component={NotFound} />

            <Redirect from="/" exact to="/movies" />
            <Redirect to="/notFound" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
