import React, { Component } from "react";
import { TextField, InputAdornment, Button, Paper } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import SendIcon from "@material-ui/icons/Send";
import { getFirebase } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { store } from "../..";
class Login extends Component {
  state = {
    email: "",
    pass: "",
    loggedIn: this.props.loggedIn,
  };
  componentDidMount = () => {};
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  login = (e) => {
    e.preventDefault();
    const { email, pass } = this.state;
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        console.log("User Logged in");
        store.dispatch({ type: "LOGGED_IN", payload: true });
      })
      .catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        store.dispatch({ type: "LOGIN_ERROR", payload: errorMessage });
        // ...
      });
  };
  render() {
    const { auth, loginError } = this.props;
    console.log(loginError);
    if (auth.uid) return <Redirect to="/admin/home" />;
    return (
      <div className="login-page">
        <div className="login-outer">
          <Paper elevation={1}>
            <form onSubmit={this.login}>
              <TextField
                onChange={this.handleChange}
                name="email"
                type="email"
                className="login-mail"
                label="Email ID"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <br />
              <TextField
                name="pass"
                onChange={this.handleChange}
                type="password"
                className="login-pass"
                label="Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <br />
              <Button type = "submit" onClick={this.login} variant="contained" color="primary">
                <SendIcon fontSize="large" style={{ margin: "0 0.8rem 0 0" }} />{" "}
                Login
              </Button>
            </form>
            <div
              style={{ width: "80%", color: "red", margin: "3rem auto 0 auto" }}
            >
              {loginError}
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    loggedIn: state.loggedIn,
    loginError: state.loginError,
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(Login);
