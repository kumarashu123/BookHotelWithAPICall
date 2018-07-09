import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { UnauthRoute, AuthRoute } from "react-router-auth";
import Login from "./container/Login";
import SignUp from "./container/SignUp";
import "./App.css";
import Home from "./container/Home";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <UnauthRoute
            exact
            path="/"
            redirectTo="/home"
            component={Login}
            authenticated={this.props.isAuthenticated}
          />
          <UnauthRoute
            exact
            path="/signup"
            redirectTo="/home"
            component={SignUp}
            authenticated={this.props.isAuthenticated}
          />

          <AuthRoute
            exact
            path="/home"
            redirectTo="/"
            component={Home}
            authenticated={this.props.isAuthenticated}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.login.loggedIn
});

export default connect(mapStateToProps)(App);
