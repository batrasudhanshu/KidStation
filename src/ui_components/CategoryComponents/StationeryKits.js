import React from 'react'
import '../../styles/header_banner.css';
import HeaderBanner from '../BaseComponent/HeaderBanner';
import {fetchProduct} from '../../CMS/actions/UploadAction';
import {connect} from 'react-redux';
import marker_banner from '../../images/marker_banner.jpg';
import ProductCard from '../BaseComponent/ProcuctCard';


class StationeryKits extends React.Component {
    componentWillMount = () =>{
        this.props.fetchProduct();
    }
    render(){
        const {stationary_kits} = this.props;
        // console.log(rulers);
        return(
        <>
            <HeaderBanner tag="Sketch Pen & Marker" bannerImg={`url(${marker_banner})`} />
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
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProduct: () => {
            dispatch(fetchProduct())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StationeryKits);