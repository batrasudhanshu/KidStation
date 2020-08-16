import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadAction } from "./actions/UploadAction";
import Test from "./Test";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import AuthNavbar from "./AuthUI/AuthNavbar";

class CMS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      productprice: "",
      productdescription: "",
      productid: "",
      collection: "",
      bestselling: false,
      soldout: false,
    };
  }
  handleChange = (e) => {
    return this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleChangeBestSelling = (e) => {
    return this.setState((state) => ({
      bestselling: !state.bestselling,
    }));
  };
  handleChangeImage = (e) => {
    return this.setState({
      image: e.target.files[0],
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    // console.log(this.props.files);
    // alert('Wait for few seconds to upload. You will automatically be redirected to a new page.');
    this.props.uploadAction(this.state);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.UploadSuccess !== this.props.UploadSuccess) {
      this.setState({
        productname: "",
        productprice: "",
        productdescription: "",
        productid: "",
        collection: "",
        bestselling: false,
      });
      toast("Product Added Successfully");
    }
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/admin" />;
    const {
      productid,
      productname,
      productprice,
      productdescription,
      bestselling,
      collection,
    } = this.state;
    console.log(bestselling);
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
        <AuthNavbar page="add product" />
        <Grid container spacing={3}>
          <Grid xs={12}>
            <div className="backendpage-title">
              <h3>Product Info</h3>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="cms-progress-bar">
              <LinearProgress
                color={"primary"}
                variant="buffer"
                valueBuffer={this.props.progress + 10 || 0}
                value={this.props.progress || 0}
              />
            </div>
            {/* Drag and Drop Image */}

            <Test />
          </Grid>
          <Grid item xs={12} md={6}>
            <form className="cms-form">
              <TextField
                className="cms-field"
                autoComplete="off"
                value={productid}
                name="productid"
                onChange={this.handleChange}
                label="Product ID"
                variant="outlined"
              />
              <TextField
                className="cms-field"
                autoComplete="off"
                value={productname}
                name="productname"
                onChange={this.handleChange}
                label="Product Name"
                variant="outlined"
              />
              <TextField
                className="cms-field"
                autoComplete="off"
                InputProps={{
                  startAdornment: (
                    <InputAdornment style={{ marginRight: "0.5rem" }}>
                      &#8377;
                    </InputAdornment>
                  ),
                }}
                value={productprice}
                name="productprice"
                onChange={this.handleChange}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Product Price"
                variant="outlined"
              />
              <TextField
                className="cms-field"
                autoComplete="off"
                multiline
                value={productdescription}
                name="productdescription"
                onChange={this.handleChange}
                label="Product Description"
                variant="outlined"
              />
              <FormControl variant="outlined" className="cms-field">
                <InputLabel id="demo-simple-select-outlined-label">
                  Collection
                </InputLabel>
                <Select
                  name="collection"
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={collection}
                  onChange={this.handleChange}
                  label="Collection"
                >
                  <MenuItem value={"pens"}>Pen & Pencil</MenuItem>
                  <MenuItem value={"water_bottles"}>Water Bottle</MenuItem>
                  <MenuItem value={"bags"}>Bags</MenuItem>
                  <MenuItem value={"geometry_boxes"}>Geometry Boxes</MenuItem>
                  <MenuItem value={"notebooks"}>Notebook & Register</MenuItem>
                  <MenuItem value={"lunch_boxes"}>Lunch Box</MenuItem>
                  <MenuItem value={"erasers"}>Eraser & Sharpner</MenuItem>
                  <MenuItem value={"markers"}>Marker</MenuItem>
                </Select>
              </FormControl>

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
                />
              </div>
              <div style={{ clear: "both" }}></div>
              <Button
                className="cms-crudfield-submit-btn"
                onClick={this.onSubmit}
                size="large"
                variant="contained"
                color="primary"
              >
                SUBMIT
              </Button>
            </form>
          </Grid>
        </Grid>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  // debugger
  // console.log(ownProps);
  return {
    UploadSuccess: state.uploadSuccess,
    progress: state.progress.value.progress,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    uploadAction: (productData) => {
      dispatch(uploadAction(productData));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CMS);
