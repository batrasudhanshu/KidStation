import React from 'react'
import '../../styles/header_banner.css';
import HeaderBanner from '../BaseComponent/HeaderBanner';
import {fetchProduct} from '../../CMS/actions/UploadAction';
import {connect} from 'react-redux';
import marker_banner from '../../images/marker_banner.jpg';
import ProductCard from '../BaseComponent/ProcuctCard';


class Markers extends React.Component {
    componentWillMount = () =>{
        this.props.fetchProduct();
    }
    render(){
        const {markers} = this.props;
        // console.log(rulers);
        return(
        <>
            <HeaderBanner tag="Sketch Pen & Marker" bannerImg={`url(${marker_banner})`} />
            <ProductCard data={markers}/>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    let markerData = [];
    state.products.length!==0 && state.products.map((product,index)=>{
        product.collection.stringValue === 'markers' && markerData.push(product);
    })
    return { 
        markers: markerData
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProduct: () => {
            dispatch(fetchProduct())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Markers);