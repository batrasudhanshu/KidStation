import React from "react";
import { connect } from "react-redux";
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
import { fetchProduct } from "../actions/UploadAction";
import { updateProductData } from "../actions/updateAction";
import { addImages } from "../actions/updateAction";
import { passSelectedProductAction } from "../actions/passSelectedProductAction";
import LinearProgress from "@material-ui/core/LinearProgress";

class ProductCrudDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      productprice: "",
      productdescription: "",
      collection: "",
      productid: this.props.match.params.id,
      image: null,
      bestselling: false,
      disabled: false,
    };
  }
  componentWillMount = () => {
    // debugger
    this.props.fetchProduct();
  };
  componentWillReceiveProps = (nextProps, prevState) => {
    if (this.props !== nextProps) {
      if (nextProps.currentProduct) {
        const collection = nextProps.currentProduct.collection.stringValue;
        const desc = nextProps.currentProduct.productdescription.stringValue;
        const name = nextProps.currentProduct.productname.stringValue;
        const price = nextProps.currentProduct.productprice.stringValue;
        const bestselling = nextProps.currentProduct.bestselling.booleanValue;
        return this.setState((state) => ({
          productdescription: desc,
          productname: name,
          productprice: price,
          collection,
          bestselling,
        }));
      }
    }
  };
  componentDidMount = () => {};

  deleteImage = (img) => {
    let { currentProduct } = this.props;
    var firestore = getFirestore();
    var firebase = getFirebase();
    var storage = firebase.storage();
    const FieldValue = firebase.firestore.FieldValue;
    firestore
      .collection(currentProduct.collection.stringValue)
      .doc(currentProduct.productid.stringValue)
      .update({
        image_url: FieldValue.arrayRemove(img),
      });
    var imageRef = storage.refFromURL(img);
    imageRef
      .delete()
      .then(function () {
        // File deleted successfully
        console.log("file deleted successfully");
        window.location.reload();
      })
      .catch(function (error) {
        console.log("error in file deletion");
      });
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

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.setState({ disabled: true });
    this.props.updateEraser(this.state);
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
  render() {
    const {
      productname,
      productprice,
      productdescription,
      bestselling,
      disabled,
    } = this.state;
    let { currentProduct } = this.props;
    console.log("currentproduct:", currentProduct);
    return (
      <>
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
                    currentProduct.image_url.arrayValue.values.map(
                      (img, index) => {
                        return (
                          <div className="remove-image-block" key={index}>
                            <img
                              src={img.stringValue}
                              width="50px"
                              height="50px"
                              alt=""
                            />
                            <CancelIcon
                              className={disabled ? "hideIcon" : ""}
                              onClick={() =>
                                this.deleteImage(img.stringValue, index)
                              }
                            />
                          </div>
                        );
                      }
                    )}
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
  const id = ownProps.match.params.id;
  let currentProduct;
  console.log(state);
  state.products &&
    state.products.map((product) => {
      if (product.productid && product.productid.stringValue === id) {
        currentProduct = product;
      }
    });
  return {
    currentProduct: currentProduct,
    files: state.files,
    progress: state.progress.value.progress,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProduct: () => {
      dispatch(fetchProduct());
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
