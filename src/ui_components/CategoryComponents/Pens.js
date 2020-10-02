import React from "react";

import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import pen_banner from "../../images/pen_banner.JP2";
import ProductCard from "../BaseComponent/ProcuctCard";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import SortCollection from "../BaseComponent/SortCollection";

class Pen extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { pens } = this.props;

    return (
      <>
        <SearchFilter />
        <HeaderBanner tag="Pen & Pencil" color="#1616ec" bannerImg={`url(${pen_banner})`} />
        <SortCollection />
        <ProductCard data={pens} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let penData = [];
  state.products.length !== 0 &&
    state.products.map((product, index) => {
      product.collection.stringValue === "pens" && penData.push(product);
    });
  return {
    pens: penData,
  };
};
export default connect(mapStateToProps)(Pen);
