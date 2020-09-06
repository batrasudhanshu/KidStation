import React from "react";
import "../../styles/header_banner.css";
import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import lunch_banner from "../../images/lunch_banner.JP2";
import ProductCard from "../BaseComponent/ProcuctCard";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import SortCollection from "../BaseComponent/SortCollection";

class LunchBoxes extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { lunch_boxes } = this.props;

    return (
      <>
        <SearchFilter />
        <HeaderBanner tag="Lunch Boxes" bannerImg={`url(${lunch_banner})`} />
        <SortCollection />
        <ProductCard data={lunch_boxes} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let lunchData = [];
  state.products.length !== 0 &&
    state.products.map((product, index) => {
      product.collection.stringValue === "lunch_boxes" &&
        lunchData.push(product);
      return <></>;
    });
  return {
    lunch_boxes: lunchData,
  };
};
export default connect(mapStateToProps)(LunchBoxes);
