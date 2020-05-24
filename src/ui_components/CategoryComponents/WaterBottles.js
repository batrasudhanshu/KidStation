import React from 'react'
import '../../styles/header_banner.css';
import HeaderBanner from '../BaseComponent/HeaderBanner';
import {fetchProduct} from '../../CMS/actions/UploadAction';
import {connect} from 'react-redux';
import water_banner from '../../images/water_banner.jpg';
import ProductCard from '../BaseComponent/ProcuctCard';


class WaterBottles extends React.Component {
    componentWillMount = () =>{
        this.props.fetchProduct();
    }
    render(){
        const {water_bottles} = this.props;
        // console.log(rulers);
        return(
        <>
            <HeaderBanner tag="Lunch Boxes" bannerImg={`url(${water_banner})`} />
            <ProductCard data={water_bottles}/>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    let waterData = [];
    state.products.length!==0 && state.products.map((product,index)=>{
        product.collection.stringValue === 'water_bottles' && waterData.push(product);
    })
    return { 
        water_bottles: waterData
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProduct: () => {
            dispatch(fetchProduct())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WaterBottles);