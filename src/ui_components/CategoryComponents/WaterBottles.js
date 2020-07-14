import React from "react";
import "../../styles/header_banner.css";
import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import water_banner from "../../images/water_banner.jpg";
import ProductCard from "../BaseComponent/ProcuctCard";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";

class WaterBottles extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { water_bottles } = this.props;

    return (
      <>
        <SearchFilter />
        <HeaderBanner tag="Water Bottles" bannerImg={`url(${water_banner})`} />
        <ProductCard data={water_bottles} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  let waterData = [];
  state.products.length !== 0 &&
    state.products.map((product, index) => {
      product.collection.stringValue === "water_bottles" &&
        waterData.push(product);
    });
  return {
    water_bottles: waterData,
  };
};
export default connect(mapStateToProps)(WaterBottles);
