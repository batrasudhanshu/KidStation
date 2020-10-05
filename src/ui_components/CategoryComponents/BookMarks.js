import React from "react";

import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import bags_banner from "../../images/bags_banner.jpg";
import ProductCard from "../BaseComponent/ProcuctCard";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import SortCollection from "../BaseComponent/SortCollection";

class BookMark extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { book_marks } = this.props;
    return (
      <>
        <SearchFilter />
        <HeaderBanner
          tag="Sticky Notes & BookMarks"
          bannerImg={`url(${bags_banner})`}
        />
        <SortCollection />
        <ProductCard data={book_marks} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let bookMarkData = [];
  state.products.length !== 0 &&
    state.products.map((product, index) => {
      product &&
        product.collection.stringValue === "book_marks" &&
        bookMarkData.push(product);
    });
  return {
    book_marks: bookMarkData,
  };
};
export default connect(mapStateToProps)(BookMark);
