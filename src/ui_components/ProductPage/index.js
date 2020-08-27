import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Container, Button, Breadcrumbs } from "@material-ui/core";
import {
  fetchProduct,
  fetchCurrentProduct,
} from "../../CMS/actions/UploadAction";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "@material-ui/lab/Skeleton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ShareComponent from "./shareComponent";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import bestsellerStamp from "../../images/Best-seller-stamp.png";
import Error404 from "../BaseComponent/Error404";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProduct: true,
      SelectedImage:
        this.props.currentProduct.length !== 0 &&
        this.props.currentProduct.image_url[
          this.props.currentProduct.coverIndex
        ],
    };
    this.handleImageSelection = this.handleImageSelection.bind(this);
    this.nextFun = this.nextFun.bind(this);
    this.prevFun = this.prevFun.bind(this);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props !== prevProps) {
      if (this.props.isProduct !== prevProps.isProduct) {
        this.setState({ isProduct: this.props.isProduct });
      }
      if (this.props.currentProduct.productid) {
        let coverIndex = this.props.currentProduct.coverIndex;
        let imgUrl = this.props.currentProduct.image_url[coverIndex];
        return this.setState((state) => ({ SelectedImage: imgUrl }));
      }
    }
  };

  componentDidMount() {
    console.log("PROPS", this.props);
    this.props.fetchCurrentProduct(this.props.location.pathname);
    window.scrollTo(0, 0);
  }
  handleImageSelection = (image) => {
    this.setState({ SelectedImage: image });
  };
  nextFun = () => {
    this.slider.slickNext();
  };
  prevFun = () => {
    this.slider.slickPrev();
  };
  render() {
    const { currentProduct, isProduct } = this.props;
    // const {  } = this.state;
    console.log("ispro", isProduct);
    let product = currentProduct.productid && currentProduct;
    const imageLength =
      currentProduct.productid && currentProduct.image_url.length;
    const settings = {
      dots: false,
      infinite: imageLength > 4,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
    };
    let descArray = [];
    let description = product && product.productdescription;
    descArray = description !== undefined && description.split("#");
    let urlVal =
      product &&
      "https://api.whatsapp.com/send?phone=919999089262&text=I would like to know more about: *" +
        product.productname +
        "*, https://kidstation-version1.firebaseapp.com/" +
        product.collection +
        "/" +
        product.productid;
    return (
      <div>
        <SearchFilter />
        <Container style={{ marginTop: "1rem" }}>
          {isProduct ? (
            product ? (
              <>
                <Grid
                  className="pro-main-intro"
                  container
                  spacing={3}
                  xs={12}
                  alignItems={"center"}
                >
                  <Grid item xs={12} sm={6}>
                    <div className="product-page-breadcrumb">
                      <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/">Home</Link>
                        <Link to={`/${product.collection}`}>
                          {product.collection[0].toUpperCase() +
                            product.collection.slice(1)}
                        </Link>
                        <Link
                          color="textPrimary"
                          // href="/components/breadcrumbs/"
                          aria-current="page"
                        >
                          {product.productname[0].toUpperCase() +
                            product.productname.slice(1)}
                        </Link>
                      </Breadcrumbs>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="product-name-style">
                      {product.productname[0].toUpperCase() +
                        product.productname.slice(1)}
                    </div>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid className="pro-main-image" item xs={12} sm={6}>
                    <div className="product-main-image">
                      <img src={this.state.SelectedImage} alt="" />
                    </div>
                    <div
                      className="prod-slick-outer"
                      style={{
                        textAlign: "center",
                        position: "relative",
                        marginTop: "1.5rem",
                      }}
                    >
                      <div>
                        <ChevronLeftIcon
                          className="icon-left"
                          onClick={this.prevFun}
                          style={{
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                            left: "0",
                            zIndex: "999",
                            fontSize: "4rem",
                            cursor: "pointer",
                            backgroundColor: "rgba(255,255,255,0.8)",
                          }}
                          fontSize="large"
                        />
                      </div>
                      <Slider
                        className="product-page-slick"
                        ref={(c) => (this.slider = c)}
                        {...settings}
                      >
                        {product.image_url.length !== 0 &&
                          product.image_url.map((img) => (
                            <Grid item>
                              <Button
                                onClick={() => this.handleImageSelection(img)}
                              >
                                <div
                                  style={{
                                    height: "100%",
                                    width: "100%",
                                    overflow: "hidden",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    style={{
                                      height: "100%",
                                      width: "100%",
                                      objectFit: "cover",
                                    }}
                                    src={img}
                                    alt=""
                                  />
                                </div>
                              </Button>
                            </Grid>
                          ))}
                      </Slider>
                      <div>
                        <ChevronRightIcon
                          onClick={this.nextFun}
                          style={{
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                            right: 0,
                            zIndex: "999",
                            fontSize: "4rem",
                            cursor: "pointer",
                            backgroundColor: "rgba(255,255,255,0.8)",
                          }}
                          fontSize="large"
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid container xs={12} sm={6} spacing={3}>
                    <Grid className="pro-main-details" item xs={24} sm={12}>
                      <div>
                        <div
                          style={{
                            fontSize: "3rem",
                            fontWeight: "500",
                            margin: "0.5rem 0",
                            color: "#333",
                            fontFamily: "Piedra",
                          }}
                        >
                          &#8377; {product.productprice}
                          {product.bestselling && (
                            <span style={{ marginLeft: "1rem" }}>
                              <img src={bestsellerStamp} width="50px" />
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: "2rem", color: "#444" }}>
                          <ul style={{ padding: "0rem 1.7rem" }}>
                            {descArray.map((desc, index) =>
                              index > 0 ? (
                                <li
                                  style={{
                                    listStylePosition: "outside !important",
                                  }}
                                >
                                  {desc}
                                </li>
                              ) : null
                            )}
                          </ul>
                        </div>
                        <div className="buy-connect-btn">
                          <a href={urlVal}>BUY/CONNECT</a>
                        </div>
                        <div>
                          <h5 style={{ marginTop: "1rem", color: "#999" }}>
                            Product color may slightly vary due to photographic
                            lighting sources or your monitor settings**
                          </h5>
                        </div>
                        <div>
                          <ShareComponent
                            url={`https://kidstation-version1.firebaseapp.com/${product.collection}/${product.productid}`}
                            text="Check out for more products like this."
                          />
                        </div>
                        {/* url={`localhost:3000/${product.collection}/${product.productid}`} */}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ) : (
              <>
                <Grid container xs={12} spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <div>
                      <Skeleton variant="rect" height={114} animation="pulse" />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div>
                      <Skeleton variant="rect" height={114} animation="pulse" />
                    </div>
                  </Grid>
                </Grid>
                <Grid container spacing={3} xs={12}>
                  <Grid className="pro-main-image" item xs={12} sm={6}>
                    <div className="product-main-image">
                      <Skeleton variant="rect" height={500} animation="pulse" />
                    </div>
                    <div
                      className="prod-slick-outer"
                      style={{
                        textAlign: "center",
                        position: "relative",
                        marginTop: "1.5rem",
                      }}
                    >
                      <Skeleton variant="rect" height={100} animation="pulse" />
                    </div>
                  </Grid>
                  <Grid className="pro-main-details" item xs={12} sm={6}>
                    <div
                      style={{
                        margin: "0.5rem 0",
                      }}
                    >
                      <Skeleton variant="rect" height={42} animation="pulse" />
                    </div>
                    <div>
                      <Skeleton variant="rect" height={150} animation="pulse" />
                    </div>
                    <div className="buy-connect-btn">
                      <a href={urlVal}>BUY/CONNECT</a>
                    </div>
                    <div>
                      <h5 style={{ marginTop: "1rem" }}>
                        <Skeleton variant="rect" animation="pulse" />
                        <Skeleton variant="rect" animation="pulse" />
                      </h5>
                    </div>
                    <div>
                      <ShareComponent
                        url="www.google.com"
                        text="Check out this website: www.google.com"
                      />
                    </div>
                  </Grid>
                </Grid>
              </>
            )
          ) : (
            <Error404 />
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // 1. isPRoduct true  product exist: 1. product fetched:true dispatch(isPRoduct:true, currentProduct)
  // 2.  isPRoduct true  product!exist  product fetched:false dispatch(isProduct:false, currentProduct:null)
  //isProduct ? (currentProduct ? show product: skeleton ): error404
  console.log(state);
  return {
    currentProduct: state.currentProduct || [],
    isProduct: state.isProduct,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCurrentProduct: (url) => {
      dispatch(fetchCurrentProduct(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
