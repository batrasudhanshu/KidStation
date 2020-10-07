import React from "react";

import HeaderBanner from "../BaseComponent/HeaderBanner";
import { connect } from "react-redux";
import bags_banner from "../../images/bags_banner.jpg";
import ProductCard from "../BaseComponent/ProcuctCard";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import SortCollection from "../BaseComponent/SortCollection";

class Folder extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const { folders } = this.props;
        return (
            <>
                <SearchFilter />
                <HeaderBanner tag="Folders" bannerImg={`url(${bags_banner})`} />
                <SortCollection />
                <ProductCard data={folders} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    let folderData = [];
    state.products.length !== 0 &&
        state.products.map((product, index) => {
            product && product.collection.stringValue === "folders" && folderData.push(product);
        });
    return {
        folders: folderData,
    };
};
export default connect(mapStateToProps)(Folder);
