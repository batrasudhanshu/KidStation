import React, { Component } from "react";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import ProductCard from "../BaseComponent/ProcuctCard";
import { connect } from "react-redux";

import { SizeMe } from "react-sizeme";
import FilterSort from "../ShopPage/FilterSort";
import FilterSortMain from "../ShopPage/FilterSortMain";

class BestsellingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { bestselling } = this.props;
    

    console.log("bestselling", bestselling);
    return (
      <div>
        <SearchFilter />
        <SizeMe
          refreshRate={32}
          render={({ size }) => (
            <div>
              {size.width < 552 ? (
                <FilterSort page="bestSellingPage" />
              ) : (
                <FilterSortMain page="bestSellingPage" />
              )}
            </div>
          )}
        />
        <ProductCard data={bestselling} />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  let bestselling = [];
  state.filtersort &&
    state.filtersort.map((product) => {
      product.bestselling.booleanValue && bestselling.push(product);
    });
  return {
    filtersort: state.filtersort,
    bestselling: bestselling
  };
};

export default connect(mapStateToProps)(BestsellingPage);
