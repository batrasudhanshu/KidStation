import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../actions/UploadAction";
import ProductCrudList from "./ProductCrudList";
import SearchFilterCMS from "./SearchFilterCMS";
import { Redirect } from "react-router-dom";
import AuthNavbar from "../AuthUI/AuthNavbar";

class ProductCrud extends React.Component {
  componentDidMount = () => {
    this.props.fetchProduct();
  };
  render() {
    const { filterProduct, auth } = this.props;
    if (!auth.uid) return <Redirect to="/admin" />;
    return (
      <div>
        <div>
          <AuthNavbar page="view product" />
        </div>
        <div className="">
          <SearchFilterCMS />
          <h2 style={{ textAlign: "center", margin: "20px" }}>PRODUCTS</h2>
          <ProductCrudList products={filterProduct} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    filterProduct: state.filterProduct,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProduct: () => {
      dispatch(fetchProduct());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductCrud);
