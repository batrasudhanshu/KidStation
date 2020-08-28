import React from "react";
import "../../styles/header_banner.css";
import { connect } from "react-redux";
import ProductCard from "../BaseComponent/ProcuctCard";
import FilterSort from "../ShopPage/FilterSort";
import FilterSortMain from "../ShopPage/FilterSortMain";
import { SizeMe } from "react-sizeme";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import NoResult from "./NoResult";
import EnterValue from "./EnterValue";
import { fetchProductOnFilter } from "../../CMS/actions/fetchProductAction";

class ShopPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { searchedProducts, emptySearch, searchedFilterSort } = this.props;
    return (
      <>
        <SearchFilter />
        <SizeMe
          refreshRate={32}
          render={({ size }) => (
            <div>
              {size.width < 552 ? (
                <FilterSort page="searchResult" />
              ) : (
                <FilterSortMain page="searchResult" />
              )}
            </div>
          )}
        />
        {emptySearch ? (
          <EnterValue />
        ) : searchedProducts.length === 0 ? (
          <NoResult />
        ) : (
          <ProductCard data={searchedFilterSort} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    globalSearch: state.globalSearch,
    searchedProducts: state.searchedProducts,
    searchedFilterSort: state.searchedFilterSort,
    emptySearch: state.emptySearch,
    searchInput: state.searchInput,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProductOnFilter: (data) => {
      dispatch(fetchProductOnFilter(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
