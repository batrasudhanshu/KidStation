import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Container, Button, Breadcrumbs } from "@material-ui/core";
import { fetchCurrentProduct } from "../../CMS/actions/UploadAction";
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
import { store } from "../..";
import "./styleComponents/ProductPage.css";
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
  componentWillUnmount = () => {
    store.dispatch({ type: "ISPRODUCT", payload: true });
    store.dispatch({ type: "CURRENT_PRODUCT", payload: null });
  };

  componentDidMount() {
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
    // const emoji = '\u{1F60E}';
    const { currentProduct, isProduct } = this.props;
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
      <div className="product-page-animate">
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
                    {product.image_url.length > 1 ? (
                      <div className="prod-slick-outer">
                        <div>
                          <ChevronLeftIcon
                            className="icon-left"
                            onClick={this.prevFun}
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
                                  <div className="prod-slider-imgs">
                                    <img src={img} alt="" />
                                  </div>
                                </Button>
                              </Grid>
                            ))}
                        </Slider>
                        <div>
                          <ChevronRightIcon
                            className="icon-right"
                            onClick={this.nextFun}
                            fontSize="large"
                          />
                        </div>
                      </div>
                    ) : null}
                  </Grid>
                  <Grid container xs={12} sm={6} spacing={3}>
                    <Grid className="pro-main-details" item xs={24} sm={12}>
                      <div className="pro-main-details-inner">
                        <div className="prod-main-price">
                          &#8377; {product.productprice}
                          {product.bestselling && (
                            <span>
                              <img src={bestsellerStamp} alt="" />
                            </span>
                          )}
                        </div>
                        <div className="prod-desc-lists">
                          <ul>
                            {descArray.map((desc, index) =>
                              index > 0 ? <li>{desc}</li> : null
                            )}
                          </ul>
                        </div>
                        <div className="buy-connect-btn">
                          <a target="blank" href={urlVal}>
                            BUY/CONNECT
                          </a>
                        </div>
                        <div className="prod-disclaimer">
                          <h5>
                            Product color may slightly vary due to photographic
                            lighting sources or your monitor settings**
                          </h5>
                        </div>
                        <div>
                          <ShareComponent
                            url={`https://kidstation-version1.firebaseapp.com/${product.collection}/${product.productid}`}
                            text={`Check out product: ${product.productname}. \n Click on link to know more about this product. Also checkout more products on KidStation your online stationery store. `}
                          />
                        </div>
                        {/* url={`localhost: {product.collection}/${product.productid}`} */}
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
                    <div className="prod-slick-outer">
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
                    <div style={{ marginTop: "1rem" }}>
                      <Skeleton
                        variant="rect"
                        height={60}
                        width={150}
                        animation="pulse"
                      />
                    </div>
                    <div>
                      <h5 style={{ marginTop: "1rem" }}>
                        <Skeleton variant="rect" animation="pulse" />
                        <Skeleton variant="rect" animation="pulse" />
                      </h5>
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                      <Skeleton
                        height={50}
                        width={50}
                        variant="rect"
                        animation="pulse"
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
