import React, { Component } from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import EraserList from "./EraserList";

class EraserRoot extends Component {
  render() {
    const { erasers } = this.props;

    return (
      <div>
        <EraserList erasers={erasers} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  return {
    erasers: state.firestore.ordered.erasers,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "erasers" }])
)(EraserRoot);
