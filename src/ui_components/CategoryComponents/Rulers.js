import React from 'react'
import '../../styles/header_banner.css';
import HeaderBanner from '../BaseComponent/HeaderBanner';
import {fetchProduct} from '../../CMS/actions/UploadAction';
import {connect} from 'react-redux';
import ruler_banner from '../../images/ruler_banner.png';
import ProductCard from '../BaseComponent/ProcuctCard';
import SearchFilter from '../../CMS/ProductCrud/SearchFilter';


class Ruler extends React.Component {
    render(){
        const {rulers} = this.props;
        return(
        <>
            <SearchFilter/>
            <HeaderBanner tag="Rulers" bannerImg={`url(${ruler_banner})`} />
            <ProductCard data={rulers}/>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    let rulerData = [];
    state.products.length!==0 && state.products.map((product,index)=>{
        product.collection.stringValue === 'rulers' && rulerData.push(product);
    },)
    return { 
        rulers: rulerData
    }
}
export default connect(mapStateToProps)(Ruler);