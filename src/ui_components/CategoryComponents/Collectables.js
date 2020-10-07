import React from "react";

import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import bags_banner from "../../images/bags_banner.jpg";
import ProductCard from "../BaseComponent/ProcuctCard";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import SortCollection from "../BaseComponent/SortCollection";

class Collectable extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const { collectables } = this.props;
        return (
            <>
                <SearchFilter />
                <HeaderBanner tag="Collectables & Storage Boxes" bannerImg={`url(${bags_banner})`} />
                <SortCollection />
                <ProductCard data={collectables} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    let collectableData = [];
    state.products.length !== 0 &&
        state.products.map((product, index) => {
            product && product.collection.stringValue === "collectables" && collectableData.push(product);
        });
    return {
        collectables: collectableData,
    };
};
export default connect(mapStateToProps)(Collectable);
