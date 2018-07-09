import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { validateUser } from "../actions/login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:"",
      password:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName=(e)=>{
      this.setState({ userName: e.target.value });
  }

  handlePassword=(e)=>{
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { userName, password } = this.state;
    this.props.validateUser(userName, password);
  }

  render() {
    const { errorMsg } = this.props;
    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12 login-title">Login to your Account</div>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="email"
              name="userName"
              id="userName"
              onChange={this.handleName}
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
              onChange={this.handlePassword}
              required
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group text-danger">{errorMsg}</div>
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
  loggedIn: state.login.loggedIn,
  errorMsg: state.login.errorMsg
});

const mapDispatchToProps = dispatch => ({
  validateUser: (userName, password) => dispatch(validateUser(userName, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
