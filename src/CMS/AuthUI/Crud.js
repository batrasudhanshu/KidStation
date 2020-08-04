import React, { Component } from "react";
import $ from "jquery";
import "./crud.css";
// import { connect } from 'react-redux';
// import {compose} from 'redux';
// import { firestoreConnect } from 'react-redux-firebase'

class Crud extends Component {
  componentDidMount() {
    $(".plus-btn").click(function () {
      $("body").toggleClass("menu-open");
    });
  }
  render() {
    return (
      <div class="crud">
        <div className="plus-btn-pos">
          <div className="plus-btn">
            <div className="r1"></div>
            <div className="r2"></div>
          </div>
        </div>
        <div style={{ textAlign: "center", margin: '3rem' }}>
          <h2>Welcome, you are logged in!</h2>
            <h1>Hello! Admin</h1>
            <h2>Click on + button for reference</h2>
        </div>

        <div className="menu-container">
          <div className="menu-sliders"></div>
          <div className="menu-sliders"></div>
          <div className="menu-sliders"></div>
          <div className="menu row ">
            <div className="col-md-12 col-xs-12 col-sm-12">
              <ul>
                <li>
                  <a href="#!">Add New Product</a>
                </li>
                <li>
                  <a href="#!">Erasers & Sharpners</a>
                </li>
                <li>
                  <a href="#!">Rulers </a>
                </li>
                <li>
                  <a href="#!">Lunch Boxes</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = (state, ownProps) => {
//     return {

//     }
// }
// export default compose(
//     connect(mapStateToProps),
//     firestoreConnect([
//         {collection:'erasers'}
//     ])
// )(Crud)
export default Crud;
