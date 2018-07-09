import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createUser } from "../actions/signup";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {fname:'', lname:'', email:'', mobile:'', address:'', password:''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.userCreated &&
      this.props.userCreated !== nextProps.userCreated
    ) {
      this.props.history.push("/");
    }
  }

  handleFname=(e)=>{
    this.setState({ fname: e.target.value });
  }

  handleLname=(e)=>{
    this.setState({ lname: e.target.value });
  }

  handleEmail=(e)=>{
    this.setState({ email: e.target.value });
  }

  handleMobile=(e)=>{
    this.setState({ mobile: e.target.value });
  }

  handleAddress=(e)=>{
    this.setState({ address: e.target.value });
  }

  handlePassword=(e)=>{
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, mobile, email, address, password } = this.state;
    const userData = {
      fname, lname, mobile, email, address, password
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
              onChange={this.handleFname}
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
              onChange={this.handleLname}
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
              onChange={this.handleEmail}
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
              onChange={this.handleMobile}
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
              onChange={this.handleAddress}
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
              onChange={this.handlePassword}
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
