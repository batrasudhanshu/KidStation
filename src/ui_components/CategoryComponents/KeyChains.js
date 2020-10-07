import React from "react";

import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import bags_banner from "../../images/bags_banner.jpg";
import ProductCard from "../BaseComponent/ProcuctCard";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import SortCollection from "../BaseComponent/SortCollection";

class KeyChain extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const { key_chains } = this.props;
        return (
            <>
                <SearchFilter />
                <HeaderBanner tag="Key Chains & Luggage Tags" bannerImg={`url(${bags_banner})`} />
                <SortCollection />
                <ProductCard data={key_chains} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    let keyChainData = [];
    state.products.length !== 0 &&
        state.products.map((product, index) => {
            product && product.collection.stringValue === "key_chains" && keyChainData.push(product);
        });
    return {
        key_chains: keyChainData,
    };
};
export default connect(mapStateToProps)(KeyChain);
