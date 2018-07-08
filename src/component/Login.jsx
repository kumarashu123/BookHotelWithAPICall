import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { validateUser } from "../actions/login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
    this.userName = React.createRef();
    this.password = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const userName = this.userName.current.value;
    const password = this.password.current.value;
    this.props.validateUser(userName, password);
  }

  render() {
    const { submitted } = this.state;
    let loginErrorMsg = "";
    if (submitted && !this.props.loggedIn) {
      loginErrorMsg = "Invalid Username or Password.";
    }

    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <div class="col-sm-12 login-title">Login to your Account</div>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="email"
              name="userName"
              id="userName"
              ref={this.userName}
              required
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              ref={this.password}
              required
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group text-danger">{loginErrorMsg}</div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
          <Link to="/signup">Register</Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn
});

export default connect(
  mapStateToProps,
  { validateUser }
)(Login);
