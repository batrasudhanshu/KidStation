import React from "react";

import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import bags_banner from "../../images/bags_banner.jpg";
import ProductCard from "../BaseComponent/ProcuctCard";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import SortCollection from "../BaseComponent/SortCollection";

class Bag extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { bags } = this.props;
    return (
      <>
        <SearchFilter />
        <HeaderBanner tag="Bags" bannerImg={`url(${bags_banner})`} />
        <SortCollection />
        <ProductCard data={bags} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let bagData = [];
  state.products.length !== 0 &&
    state.products.map((product, index) => {
      product && product.collection.stringValue === "bags" && bagData.push(product);
    });
  return {
    bags: bagData,
  };
};
export default connect(mapStateToProps)(Bag);
