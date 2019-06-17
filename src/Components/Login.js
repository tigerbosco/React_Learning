import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      isRemember: false,
      userName: "",
      password: "",
      isLoggedIn: false,
      reDirectURL: ""
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;

    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  }
  handleSubmit(event) {
    event.preventDefault();
    const isLogged =
      this.state.userName === "navin" && this.state.password === "bosco"
        ? true
        : false;

    isLogged
      ? this.setState({ isLoggedIn: true })
      : this.setState({ isLoggedIn: false });
  }
  render() {
    const isRedirect = this.state.isLoggedIn;
    if (isRedirect) {
      return <Redirect to={"user/" + this.state.userName} />;
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label className="username">
            <b>User Name </b>
          </label>
          <input
            name="userName"
            value={this.props.userName}
            onChange={event => {
              this.props.handleChange(event.target);
            }}
          />
          <br />
          <br />
          <label>
            <b>Password </b>
          </label>
          <input
            name="password"
            value={this.props.password}
            onChange={event => {
              this.props.handleChange(event.target);
            }}
          />
          <br />
          <br />
          <input
            name="isRemember"
            type="checkbox"
            //value={this.state.isRemember}
            checked={this.props.isRemember}
            onChange={event => {
              this.props.handleChange(event.target);
            }}
          />
          Remember Me
          <br />
          <button className="glossy-button glossy-button--green">
            {this.state.isLoggedIn ? "Log Out" : this.props.userName}
          </button>
        </form>
      );
    }
  }
}
function mapStateToProps(state) {
  // console.log(state);
  return {
    userName: state.LoginReducer.userName,
    password: state.LoginReducer.password,
    isRemember: state.LoginReducer.isRemember
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleChange: target => {
      //console.log(this.props);
      const action = { type: "ONCHANGE", target: target };
      dispatch(action);
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
