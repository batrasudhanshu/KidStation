import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import { checkLogin } from "./CMS/actions/checkLoginAction";
import { fetchProduct } from "./CMS/actions/UploadAction";
import { Container } from "@material-ui/core";

//cms links
import CMS from "./CMS/CMS";
import ProductCrud from "./CMS/ProductCrud/ProductCrud";
import ProductCrudDetails from "./CMS/ProductCrud/ProductCrudDetails";

//ui components links
import Home from "../src/ui_components/HomePage/Home";
import Shop from "../src/ui_components/ShopPage";
import BestsellingPage from "./ui_components/BestsellingPage";
import SearchResultPage from "../src/ui_components/SearchResultPage";
import MaterialNavbar from "./ui_components/MaterialNavbar";
import Footer from "./ui_components/Footer";

//Contact,shipping,return,track order, terms of use links
import Contact from "../src/ui_components/Contact";
import Shipping from "./ui_components/Shipping";
import Refund from "./ui_components/Refund";
import TrackOrder from "./ui_components/TrackOrder";
import TermsOfUse from "./ui_components/TermsOfUse";

//ui_components -> BaseComponent links

//ui_components -> CategoryComponents links
import Eraser from "../src/ui_components/CategoryComponents/Erasers";
import Notebook from "../src/ui_components/CategoryComponents/Notebooks";
import Bag from "./ui_components/CategoryComponents/Bags";
import Pen from "../src/ui_components/CategoryComponents/Pens";
import Water from "../src/ui_components/CategoryComponents/WaterBottles";
import Lunch from "../src/ui_components/CategoryComponents/LunchBoxes";
import Marker from "../src/ui_components/CategoryComponents/Markers";
import Geometry from "../src/ui_components/CategoryComponents/GeometryBoxes";

//ui_components -> ProductPage links
import ProductPage from "./ui_components/ProductPage/index";
import { getFirebase } from "react-redux-firebase";

// back to top icon for app
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Login from "./CMS/AuthUI/Login";
import LoginHome from "./CMS/AuthUI/LoginHome";
import { store } from ".";
import Error404 from "./ui_components/BaseComponent/Error404";

import "scroll-behavior-polyfill";

class App extends Component {
  componentWillMount = () => {
    this.props.fetchProduct();
  };
  componentDidMount = () => {
    const firebase = getFirebase();
    this.props.checkLogin();
    // window.addEventListener("scroll", this.checkScrollTop);
  };
  state = {
    showScroll: true,
  };
  checkScrollTop = () => {
    if (window.pageYOffset > 400) {
      this.setState({ showScroll: true });
    } else if (window.pageYOffset <= 400) {
      this.setState({ showScroll: false });
    }
    console.log(window.pageYOffset);
  };

  scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    const { products } = this.props;
    const { showScroll } = this.state;
    return (
      <BrowserRouter>
        <div
          className="App"
          style={{ position: "relative", minHeight: "100vh" }}
        >
          <Container maxWidth={"lg"}>
            <MaterialNavbar />
            <Switch>
              {/* cms links */}
              <Route exact path="/admin" component={Login} />
              <Route exact path="/admin/home" component={LoginHome} />
              <Route
                exact
                path="/admin/cms"
                render={() => <CMS products={products} />}
              />
              <Route
                exact
                path="/admin/cms/uploadsuccess"
                render={() => <uploadSuccess products={products} />}
              />
              <Route exact path="/admin/productcrud" component={ProductCrud} />
              <Route
                exact
                path="/admin/productcrud/:collection/:id"
                component={ProductCrudDetails}
              />

              {/* Contact,shipping,return,track order,terms of use links */}
              <Route
                exact
                path="/shipping_policy"
                render={() => <Shipping products={products} />}
              />
              <Route
                exact
                path="/refund_policy"
                render={() => <Refund products={products} />}
              />
              <Route
                exact
                path="/track_order"
                render={() => <TrackOrder products={products} />}
              />
              <Route
                exact
                path="/terms_of_use"
                render={() => <TermsOfUse products={products} />}
              />

              {/* ui components links */}
              <Route
                exact
                path="/shop"
                render={() => <Shop products={products} />}
              />
              <Route
                exact
                path="/searchresult"
                render={() => <SearchResultPage products={products} />}
              />
              <Route exact path="/footer" component={Footer} />
              <Route
                exact
                path="/Contact"
                render={() => <Contact products={products} />}
              />

              {/* ui_components -> CategoryComponents links */}
              <Route
                exact
                path="/notebooks"
                render={() => <Notebook products={products} />}
              />
              <Route
                exact
                path="/erasers"
                render={() => <Eraser products={products} />}
              />
              {/* <Route
                path="/erasers"
                render={() => <Eraser products={products} />}
              >
                <Route path="/:id" component={ProductPage} />
                <Route path="*" component={Error404} />
              </Route> */}
              <Route
                exact
                path="/lunch_boxes"
                render={() => <Lunch products={products} />}
              />
              <Route
                exact
                path="/water_bottles"
                render={() => <Water products={products} />}
              />
              <Route
                exact
                path="/bags"
                render={() => <Bag products={products} />}
              />
              <Route
                exact
                path="/pens"
                render={() => <Pen products={products} />}
              />
              <Route
                exact
                path="/markers"
                render={() => <Marker products={products} />}
              />
              <Route
                exact
                path="/geometry_boxes"
                render={() => <Geometry products={products} />}
              />
              <Route exact path="/bestselling" component={BestsellingPage} />

              <Route exact path="/pens/:id" component={ProductPage} />
              <Route exact path="/erasers/:id" component={ProductPage} />
              <Route exact path="/lunch_boxes/:id" component={ProductPage} />
              <Route exact path="/water_bottles/:id" component={ProductPage} />
              <Route exact path="/markers/:id" component={ProductPage} />
              <Route exact path="/notebooks/:id" component={ProductPage} />
              <Route exact path="/geometry_boxes/:id" component={ProductPage} />
              <Route exact path="/bags/:id" component={ProductPage} />
              <Route
                exact
                path="/"
                render={() => <Home products={products} />}
              />
              {/* <Route path="/404" component={Error404} />
              <Redirect path="/404" /> */}
              <Error404 />
            </Switch>
            <div
              onScroll={this.checkScrollTop}
              style={showScroll ? { display: "block" } : { display: "none" }}
              className="scroll-to-top"
            >
              <KeyboardArrowUpIcon
                onClick={this.scrollTop}
                style={{ width: "5rem !important", height: "5rem !important" }}
              />
            </div>
            <Footer />
          </Container>
        </div>
      </BrowserRouter>
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
    checkLogin: () => {
      dispatch(checkLogin());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
