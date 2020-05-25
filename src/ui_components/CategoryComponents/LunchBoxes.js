import React from 'react'
import '../../styles/header_banner.css';
import HeaderBanner from '../BaseComponent/HeaderBanner';
import {fetchProduct} from '../../CMS/actions/UploadAction';
import {connect} from 'react-redux';
import lunch_banner from '../../images/lunch_banner.jpg';
import ProductCard from '../BaseComponent/ProcuctCard';


class LunchBoxes extends React.Component {
    componentWillMount = () =>{
        this.props.fetchProduct();
    }
    render(){
        const {lunch_boxes} = this.props;
        // console.log(rulers);
        return(
        <>
            <HeaderBanner tag="Lunch Boxes" bannerImg={`url(${lunch_banner})`} />
            <ProductCard data={lunch_boxes}/>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    let lunchData = [];
    state.products.length!==0 && state.products.map((product,index)=>{
        product.collection.stringValue === 'lunch_boxes' && lunchData.push(product);
        return(
            <>
            </>
        )
    });
    return { 
        lunch_boxes: lunchData
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProduct: () => {
            dispatch(fetchProduct())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LunchBoxes);