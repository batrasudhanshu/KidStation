import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../actions/UploadAction";
import ProductCrudList from "./ProductCrudList";
import SearchFilterCMS from "./SearchFilterCMS";
import { Redirect } from "react-router-dom";
import AuthNavbar from "../AuthUI/AuthNavbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ProductCrud extends React.Component {
  componentDidMount = () => {
    this.props.fetchProduct();
  };
  componentDidUpdate = (prevProps, prevState) => {
    // debugger;
    if (this.props.deleteProduct !== prevProps.deleteProduct) {
      this.props.fetchProduct();
      toast("Product Deleted ");
    } else if (this.props.uploadSuccess !== prevProps.uploadSuccess) {
      this.props.fetchProduct();
      toast("Updated Succesfully ");
    }
  };
  render() {
    const { filterProduct, auth } = this.props;
    if (!auth.uid) return <Redirect to="/admin" />;
    return (
      <div>
        <ToastContainer
          autoClose={5000}
          className="toast-updated"
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
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
    uploadSuccess: state.uploadSuccess,
    deleteProduct: state.deleteReducer,
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
