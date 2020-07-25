import React from "react";
import "../../styles/header_banner.css";
import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import ruler_banner from "../../images/ruler_banner.png";
import ProductCard from "../BaseComponent/ProcuctCard";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import FilterSortMain from "../ShopPage/FilterSortMain";
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
        <HeaderBanner tag="Bags" bannerImg={`url(${ruler_banner})`} />
        <SortCollection />
        <ProductCard data={bags} />
      </>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  let bagData = [];
  state.products.length !== 0 &&
    state.products.map((product, index) => {
      product.collection.stringValue === "bags" && bagData.push(product);
    });
  return {
    bags: bagData,
  };
};
export default connect(mapStateToProps)(Bag);
