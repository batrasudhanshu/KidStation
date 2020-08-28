import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class EraserDetails extends React.Component {
  render() {
    const { eraser } = this.props;
    return (
      <div className="container section project-details">
        <div className="">
          <img
            src={eraser ? eraser.image_url : null}
            width="500px"
            height="500px"
          />
          {eraser ? eraser.productname : null}
          {eraser ? eraser.productdescription : null}
          {eraser ? eraser.productprice : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const erasers = state.firestore.data.erasers;
  const eraser = erasers ? erasers[id] : null;
  return {
    eraser: eraser,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "erasers" }])
)(EraserDetails);
