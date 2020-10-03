import React from "react";

import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import eraser_banner from "../../images/eraser_banner.JP2";
import ProductCard from "../BaseComponent/ProcuctCard";
import FilterSort from "./FilterSort";
import FilterSortMain from "./FilterSortMain";
import { SizeMe } from "react-sizeme";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";

class ShopPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentWillReceiveProps = (prevProps, state) => {
    if (prevProps !== this.props) {
    }
  };
  render() {
    let { filtersort } = this.props;

    // filtersort -10 bags-3 filtersort-3 eraser - 0
    return (
      <>
        <SearchFilter />
        <HeaderBanner
          tag="Shop our Latest Collection"
          bannerImg={`url(${eraser_banner})`}
        />
        <SizeMe
          refreshRate={32}
          render={({ size }) => (
            <div>
              {size.width < 552 ? (
                <FilterSort page="shopPage" />
              ) : (
                <FilterSortMain page="shopPage" />
              )}
            </div>
          )}
        />
        <ProductCard data={filtersort} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filtersort: state.filtersort,
  };
};
export default connect(mapStateToProps)(ShopPage);
