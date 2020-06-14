import React from 'react'
import '../../styles/header_banner.css';
import HeaderBanner from '../BaseComponent/HeaderBanner';
import {fetchProduct} from '../../CMS/actions/UploadAction';
import {connect} from 'react-redux';
import marker_banner from '../../images/marker_banner.jpg';
import ProductCard from '../BaseComponent/ProcuctCard';
import SearchFilter from '../../CMS/ProductCrud/SearchFilter';


class GeometryBox extends React.Component {
    render(){
        const {geometry_boxes} = this.props;
        
        return(
        <>
            <SearchFilter/>
            <HeaderBanner tag="Geometry Boxes" bannerImg={`url(${marker_banner})`} />
            <ProductCard data={geometry_boxes}/>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    let geometryData = [];
    state.products.length!==0 && state.products.map((product,index)=>{
        product.collection.stringValue === 'geometry_boxes' && geometryData.push(product);
    })
    return { 
        geometry_boxes: geometryData
    }
}
export default connect(mapStateToProps)(GeometryBox);