import React from "react";
import "../../styles/header_banner.css";
import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import pen_banner from "../../images/pen_banner.jpg";
import ProductCard from "../BaseComponent/ProcuctCard";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";

class Pen extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { pens } = this.props;
    console.log(pens);
    return (
      <>
        <SearchFilter />
        <HeaderBanner tag="Pen & Pencil" bannerImg={`url(${pen_banner})`} />
        <ProductCard data={pens} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
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
