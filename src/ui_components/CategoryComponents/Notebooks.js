import React from "react";

import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import notebook_banner from "../../images/notebook_banner.JP2";
import ProductCard from "../BaseComponent/ProcuctCard";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import SortCollection from "../BaseComponent/SortCollection";

class Notebook extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { notebooks } = this.props;
    return (
      <>
        <SearchFilter />
        <HeaderBanner
          tag="Notebook & Register"
          bannerImg={`url(${notebook_banner})`}
        />
        <SortCollection />
        <ProductCard data={notebooks} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  //
  let notebookData = [];
  state.products.length !== 0 &&
    state.products.map((product, index) => {
      product.collection.stringValue === "notebooks" &&
        notebookData.push(product);
    });
  return {
    notebooks: notebookData,
  };
};
export default connect(mapStateToProps)(Notebook);
