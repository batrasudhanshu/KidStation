import React from "react";

import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import water_banner from "../../images/water_banner.JP2";
import ProductCard from "../BaseComponent/ProcuctCard";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import SortCollection from "../BaseComponent/SortCollection";

class WaterBottles extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { water_bottles } = this.props;

    return (
      <>
        <SearchFilter />
        <HeaderBanner tag="Water Bottles" color="#04f9c0" bannerImg={`url(${water_banner})`} />
        <SortCollection />
        <ProductCard data={water_bottles} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let waterData = [];
  state.products.length !== 0 &&
    state.products.map((product, index) => {
      product && product.collection.stringValue === "water_bottles" &&
        waterData.push(product);
    });
  return {
    water_bottles: waterData,
  };
};
export default connect(mapStateToProps)(WaterBottles);
