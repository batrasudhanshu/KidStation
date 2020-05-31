import React from 'react'
import '../../styles/header_banner.css';
import HeaderBanner from '../BaseComponent/HeaderBanner';
import {fetchProduct} from '../../CMS/actions/UploadAction';
import {connect} from 'react-redux';
import marker_banner from '../../images/marker_banner.jpg';
import ProductCard from '../BaseComponent/ProcuctCard';
import SearchFilter from '../../CMS/ProductCrud/SearchFilter';


class StationeryKits extends React.Component {
    render(){
        const {stationary_kits} = this.props;
        // console.log(rulers);
        return(
        <>
            <SearchFilter/>
            <HeaderBanner tag="Stationery Kits" bannerImg={`url(${marker_banner})`} />
            <ProductCard data={stationary_kits}/>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    let kitData = [];
    state.products.length!==0 && state.products.map((product,index)=>{
        product.collection.stringValue === 'stationary_kits' && kitData.push(product);
    })
    return { 
        stationary_kits: kitData
    }
}
export default connect(mapStateToProps)(StationeryKits);