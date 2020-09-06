import React from "react";
import "../../styles/header_banner.css";
import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import eraser_banner from "../../images/eraser_banner.JP2";
import ProductCard from "../BaseComponent/ProcuctCard";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import SortCollection from "../BaseComponent/SortCollection";

class Eraser extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { erasers } = this.props;
    return (
      <>
        <SearchFilter />
        <HeaderBanner
          tag="Erasers & Sharpners"
          bannerImg={`url(${eraser_banner})`}
        />
        <SortCollection />
        <ProductCard data={erasers} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let eraserData = [];
  state.products.length !== 0 &&
    state.products.map((product, index) => {
      product.collection.stringValue === "erasers" && eraserData.push(product);
    });
  return {
    erasers: eraserData,
  };
};

export default connect(mapStateToProps)(Eraser);
