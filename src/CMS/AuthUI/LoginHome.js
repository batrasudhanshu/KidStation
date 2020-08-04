import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Crud from "./Crud";
import AuthNavbar from "./AuthNavbar";

class LoginHome extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/admin" />;
    return (
      <div>
        <AuthNavbar page="admin home" />
        <div style={{clear:'both'}}></div>
        <div style={{ textAlign: "center", margin: '3rem' }}>
          <h2>Welcome, you are logged in!</h2>
            <h1>Hello! Admin</h1>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    loggedIn: state.loggedIn,
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(LoginHome);
