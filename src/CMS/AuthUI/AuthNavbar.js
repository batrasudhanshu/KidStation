import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { getFirebase } from "react-redux-firebase";
import { store } from "../..";
import { Link } from "react-router-dom";

class AuthNavbar extends Component {
  logout = () => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(function () {
        store.dispatch({ type: "LOGGED_IN", payload: false });
        // Sign-out successful.
      })
      .catch(function (error) {
        window.alert(error.message);
      });
  };
  render() {
    const { page } = this.props;
    return (
      <div style={{ float: "right" }}>
        {page === "add product" && (
          <Button  className="admin-buttons"  variant="contained" color="primary">
            <Link style={{textDecoration:'none'}} to="/admin/productcrud">View Product</Link>
          </Button>
        )}
        {page === "view product" && (
          <Button className="admin-buttons" variant="contained" color="primary">
            <Link to="/admin/cms">Add Product</Link>
          </Button>
        )}
        {page === "admin home" && (
          <>
            <Button className="admin-buttons" variant="contained" color="primary">
              <Link to="/admin/productcrud">View Product</Link>
            </Button>
            <Button className="admin-buttons" variant="contained" color="primary">
              <Link to="/admin/cms">Add Product</Link>
            </Button>
          </>
        )}
        <Button className="admin-buttons" style={{backgroundColor:'saddlebrown', color:'white'}} onClick={this.logout} variant="contained" >
          Logout
        </Button>
      </div>
    );
  }
}
export default AuthNavbar;
