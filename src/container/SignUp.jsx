import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createUser } from "../actions/signup";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef();
    this.lname = React.createRef();
    this.email = React.createRef();
    this.mobile = React.createRef();
    this.address = React.createRef();
    this.password = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.userCreated &&
      this.props.userCreated !== nextProps.userCreated
    ) {
      this.props.history.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const userData = {
      fname: this.name.current.value,
      lname: this.lname.current.value,
      mobile: this.mobile.current.value,
      email: this.email.current.value,
      address: this.address.current.value,
      password: this.password.current.value
    };
    this.props.createUser(userData);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <div className="col-sm-10">Sign Up</div>
        </div>
        <div className=" form-group control-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="firstName"
              ref={this.name}
              required
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group control-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Last Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="lastName"
              ref={this.lname}
              required
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group control-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="email"
              ref={this.email}
              required
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group control-group row">
          <label htmlFor="mobileNumber" className="col-sm-2 col-form-label">
            Mobile Number
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="mobileNumber"
              ref={this.mobile}
              required
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group control-group row">
          <label htmlFor="address" className="col-sm-2 col-form-label">
            Address
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="address"
              ref={this.address}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="form-group control-group row">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              name="password"
              ref={this.password}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-primary"> SignUp</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  userCreated: state.createUser.userCreated
});

const mapDispatchToProps = dispatch => ({
  createUser: (userData) => dispatch(createUser(userData))
});

export default (SignUp = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignUp)));
