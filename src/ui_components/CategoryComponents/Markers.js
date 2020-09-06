import React from "react";
import "../../styles/header_banner.css";
import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import marker_banner from "../../images/marker_banner.JP2";
import ProductCard from "../BaseComponent/ProcuctCard";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import SortCollection from "../BaseComponent/SortCollection";

class Markers extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { markers } = this.props;
    return (
      <>
        <SearchFilter />
        <HeaderBanner
          tag="Sketch Pen & Marker"
          bannerImg={`url(${marker_banner})`}
        />
        <SortCollection />
        <ProductCard data={markers} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let markerData = [];
  state.products.length !== 0 &&
    state.products.map((product, index) => {
      product.collection.stringValue === "markers" && markerData.push(product);
    });
  return {
    markers: markerData,
  };
};
export default connect(mapStateToProps)(Markers);
