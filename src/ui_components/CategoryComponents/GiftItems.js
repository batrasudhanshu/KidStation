import React from "react";

import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import bags_banner from "../../images/bags_banner.jpg";
import ProductCard from "../BaseComponent/ProcuctCard";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import SortCollection from "../BaseComponent/SortCollection";

class GiftItem extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const { giftitems } = this.props;
        return (
            <>
                <SearchFilter />
                <HeaderBanner tag="Gift - Items" bannerImg={`url(${bags_banner})`} />
                <SortCollection />
                <ProductCard data={giftitems} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    let giftItemData = [];
    state.products.length !== 0 &&
        state.products.map((product, index) => {
            product && product.collection.stringValue === "giftitems" && giftItemData.push(product);
        });
    return {
        giftitems: giftItemData,
    };
};
export default connect(mapStateToProps)(GiftItem);
