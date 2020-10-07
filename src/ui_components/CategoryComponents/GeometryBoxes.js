import React from "react";

import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import geometry_banner from "../../images/geometry_banner.JP2";
import ProductCard from "../BaseComponent/ProcuctCard";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import SortCollection from "../BaseComponent/SortCollection";

class GeometryBox extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { geometry_boxes } = this.props;

    return (
      <>
        <SearchFilter />
        <HeaderBanner
          tag="Geometry Boxes"
          bannerImg={`url(${geometry_banner})`}
        />
        <SortCollection />
        <ProductCard data={geometry_boxes} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let geometryData = [];
  state.products.length !== 0 &&
    state.products.map((product, index) => {
      product && product.collection.stringValue === "geometry_boxes" &&
        geometryData.push(product);
    });
  return {
    geometry_boxes: geometryData,
  };
};
export default connect(mapStateToProps)(GeometryBox);
