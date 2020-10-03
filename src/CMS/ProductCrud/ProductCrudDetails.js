import React from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Test from "../Test";
import CancelIcon from "@material-ui/icons/Cancel";
import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";
import { fetchCurrentProduct } from "../actions/UploadAction";
import { updateProductData } from "../actions/updateAction";
import { addImages } from "../actions/updateAction";
import { passSelectedProductAction } from "../actions/passSelectedProductAction";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Redirect } from "react-router-dom";
import AuthNavbar from "../AuthUI/AuthNavbar";
import { store } from "../..";
import './styleComponents/ProductCrudDetails.css'
class ProductCrudDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      productname: "",
      productprice: "",
      productdescription: "",
      collection: "",
      productid: this.props.match.params.id,
      image: null,
      bestselling: false,
      disabled: false,
      coverIndex: null,
    };
    // this.deleteImage = this.deleteImage.bind(this);
  }
  componentDidMount = () => {
    // debugger
    window.scrollTo(0, 0);
    this.props.fetchCurrentProduct(this.props.match.url);
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.uploadSuccess !== prevProps.uploadSuccess) {
      toast("Updated Succesfully ");

      this.props.fetchCurrentProduct(this.props.match.url);
      if (this.props.currentProduct) {
        const collection = this.props.currentProduct.collection;
        const desc = this.props.currentProduct.productdescription;
        const name = this.props.currentProduct.productname;
        const price = this.props.currentProduct.productprice;
        const bestselling = this.props.currentProduct.bestselling;
        const coverIndex = this.props.currentProduct.coverIndex;
        return this.setState((state) => ({
          productdescription: desc,
          productname: name,
          productprice: price,
          collection,
          bestselling,
          coverIndex,
          disabled: false,
        }));
      }
    } else if (this.props !== prevProps) {
      if (this.props.currentProduct) {
        const collection = this.props.currentProduct.collection;
        const desc = this.props.currentProduct.productdescription;
        const name = this.props.currentProduct.productname;
        const price = this.props.currentProduct.productprice;
        const bestselling = this.props.currentProduct.bestselling;
        const coverIndex = this.props.currentProduct.coverIndex;
        return this.setState((state) => ({
          productdescription: desc,
          productname: name,
          productprice: price,
          collection,
          bestselling,
          coverIndex,
        }));
      }
    }
  };
  componentWillUnmount = () => {
    store.dispatch({ type: "CURRENT_PRODUCT", payload: null });
  };

  deleteImage = (img, index) => {
    let { currentProduct } = this.props;
    var firestore = getFirestore();
    var firebase = getFirebase();
    var storage = firebase.storage();
    const FieldValue = firebase.firestore.FieldValue;
    // debugger;
    if (index === parseInt(currentProduct.coverIndex)) {
      alert("Please change cover image before deleting. ");
    } else if (index >= parseInt(currentProduct.coverIndex)) {
      firestore
        .collection(currentProduct.collection)
        .doc(currentProduct.productid)
        .update({
          image_url: FieldValue.arrayRemove(img),
        });
      let imageRef = storage.refFromURL(img);
      imageRef.delete().then(function () {
        store.dispatch({ type: "UPLOAD_SUCCESS" });
        // this.setState({ update: true });
        // window.location.reload();
      });
    } else {
      firestore
        .collection(currentProduct.collection)
        .doc(currentProduct.productid)
        .update({
          image_url: FieldValue.arrayRemove(img),
          coverIndex: currentProduct.coverIndex - 1,
        });
      let imageRef = storage.refFromURL(img);
      imageRef
        .delete()
        .then(function () {
          store.dispatch({ type: "UPLOAD_SUCCESS" });
        })
        .catch(function (error) {
          console.log("error in file deletion");
        });
    }
  };

  handleChange = (e) => {
    return this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleChangeImage = (e) => {
    return this.setState({
      image: e.target.files[0],
    });
  };
  handleChangeBestSelling = () => {
    this.setState((prevState) => ({
      bestselling: !prevState.bestselling,
    }));
  };
  //add images
  uploadImage = () => {
    const { currentProduct } = this.props;
    this.setState({ disabled: true });
    this.props.addImages(currentProduct);
  };

  //Product name, price, desc, bestselling
  updateProduct = () => {
    this.props.updateProductData(this.state);
  };

  handleChangeCover = (index) => {
    const { currentProduct } = this.props;
    var firestore = getFirestore();
    firestore
      .collection(currentProduct.collection)
      .doc(currentProduct.productid)
      .update({
        coverIndex: index,
      })
      .then(function () {
        store.dispatch({ type: "UPLOAD_SUCCESS" });
      })
      .catch(function (error) {
        console.log("error");
      });
  };
  render() {
    let { currentProduct, auth } = this.props;
    if (!auth.uid) return <Redirect to="/admin" />;
    const {
      productname,
      productprice,
      productdescription,
      bestselling,
      disabled,
      coverIndex,
    } = this.state;
    console.log(currentProduct);
    return (
      <>
        <ToastContainer
          autoClose={5000}
          className="toast-updated"
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
        <AuthNavbar page="view product" />
        {/* <div style={{margin:'auto', textAlign:'center'}}>Hello</div> */}
        {currentProduct && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h2 className="backendpage-title">Update Product Details</h2>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="crud-details-upload-container">
                <h3>Uploaded Images</h3>
                <div className="crud-details-uploaded-images">
                  {currentProduct &&
                    currentProduct.image_url.map((img, index) => {
                      return (
                        <div className="remove-image-block" key={index}>
                          <input
                            type="radio"
                            name="coverIndex"
                            onClick={() => this.handleChangeCover(index)}
                            checked={index === coverIndex ? "checked" : ""}
                          />
                          <img src={img} width="50px" height="50px" alt="" />

                          <CancelIcon
                            className={disabled ? "hideIcon" : ""}
                            onClick={() => this.deleteImage(img, index)}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="cms-progress-bar">
                <LinearProgress
                  color={"primary"}
                  variant="buffer"
                  valueBuffer={this.props.progress + 10 || 0}
                  value={this.props.progress || 0}
                />
              </div>
              <div className="crud-details-dropzone">
                <Test />
                <div style={{ textAlign: "center" }}>
                  <Button
                    className="cms-crudfield-submit-btn"
                    onClick={this.uploadImage}
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    Upload
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <form className="crud-details-form" noValidate autoComplete="off">
                <TextField
                  className="crud-details-field"
                  id="standard-basic"
                  value={productname}
                  name="productname"
                  onChange={this.handleChange}
                  label="Product Name"
                  variant="outlined"
                  disabled={disabled}
                />
                <TextField
                  className="crud-details-field"
                  id="filled-basic"
                  value={productprice}
                  name="productprice"
                  onChange={this.handleChange}
                  label="Product Price"
                  variant="outlined"
                  disabled={disabled}
                />
                <TextField
                  className="crud-details-field"
                  id="outlined-basic"
                  value={productdescription}
                  name="productdescription"
                  onChange={this.handleChange}
                  label="Product Description"
                  multiline
                  variant="outlined"
                  disabled={disabled}
                />
                <div className="crud-details-checkbox-outer crud-details-field">
                  <FormControlLabel
                    className="crud-details-checkbox"
                    name="bestselling"
                    checked={bestselling}
                    onChange={this.handleChangeBestSelling}
                    control={
                      <Checkbox
                        color="primary"
                        icon={
                          <CheckBoxOutlineBlankIcon
                            style={{ width: 25, height: 25 }}
                          />
                        }
                        checkedIcon={
                          <CheckBoxIcon style={{ width: 25, height: 25 }} />
                        }
                      />
                    }
                    label="Best Selling"
                    labelPlacement="End"
                    disabled={disabled}
                  />
                </div>
                <div style={{ clear: "both" }}></div>
                <Button
                  className="cms-crudfield-submit-btn"
                  onClick={this.updateProduct}
                  size="large"
                  variant="contained"
                  color="primary"
                >
                  Update
                </Button>
              </form>
            </Grid>
          </Grid>
        )}
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    uploadSuccess: state.uploadSuccess,
    auth: state.firebase.auth,
    currentProduct: state.currentProduct,
    files: state.files,
    progress: state.progress.value.progress,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCurrentProduct: (urlDetails) => {
      dispatch(fetchCurrentProduct(urlDetails));
    },
    passSelectedProductAction: (product) => {
      dispatch(passSelectedProductAction(product));
    },
    updateProductData: (productData) => {
      dispatch(updateProductData(productData));
    },
    addImages: (product) => {
      dispatch(addImages(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCrudDetails);
