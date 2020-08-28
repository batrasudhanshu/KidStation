import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../actions/UploadAction";

class TestCrud extends React.Component {
  componentWillMount() {
    this.props.fetchProduct();
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        {products.map((p, index) => {
          return (
            <div style={{ textAlign: "center" }}>
              {index + "-" + p.productname.stringValue}
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProduct: () => {
      dispatch(fetchProduct());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestCrud);
