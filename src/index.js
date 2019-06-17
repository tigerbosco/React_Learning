import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./Components/Login";
import UserDetails from "./Components/UserDetails";
import { Provider } from "react-redux";
import Store from "./Store";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Prompt,
  Switch
} from "react-router-dom";
import "./styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <NavLink activeStyle={{ color: "green" }} exact to="/">
        Home
      </NavLink>
      <NavLink activeStyle={{ color: "green" }} exact to="/login">
        Login
      </NavLink>
      <NavLink activeStyle={{ color: "green" }} exact to="/user/:name">
        User Details
      </NavLink>
      <Route
        path="/"
        exact
        strict
        render={() => {
          return <App />;
        }}
      />
      <Route
        path="/login"
        exact
        strict
        render={() => {
          return <Login />;
        }}
      />
      <Route
        path="/user/:name"
        exact
        strict
        render={match => {
          return <UserDetails {...match} />;
        }}
      />
    </Router>
  </Provider>,
  rootElement
);
