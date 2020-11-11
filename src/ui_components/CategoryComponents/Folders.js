import React from "react";
import './styleComponents/categoryPage.css';
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
            <folders_page className="category-page-animate">
                <SearchFilter />
                <HeaderBanner tag="Folders" bannerImg={`url(${bags_banner})`} />
                <SortCollection />
                <ProductCard data={folders} />
            </folders_page>
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
