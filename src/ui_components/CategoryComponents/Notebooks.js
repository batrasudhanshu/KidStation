import React from "react";
import './styleComponents/categoryPage.css';
import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import notebook_banner from "../../images/notebooks_banner.jpg";
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
      <notebooks_page className="category-page-animate">
        <SearchFilter />
        <HeaderBanner
          tag="Notebook & Register"
          bannerImg={`url(${notebook_banner})`}
          color="#f3023e"
        />
        <SortCollection />
        <ProductCard data={notebooks} />
      </notebooks_page>
    );
  }
}

const mapStateToProps = (state) => {
  //
  let notebookData = [];
  state.products.length !== 0 &&
    state.products.map((product, index) => {
      product && product.collection.stringValue === "notebooks" &&
        notebookData.push(product);
    });
  return {
    notebooks: notebookData,
  };
};
export default connect(mapStateToProps)(Notebook);
