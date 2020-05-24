import React from 'react'
import '../../styles/header_banner.css';
import HeaderBanner from '../BaseComponent/HeaderBanner';
import {fetchProduct} from '../../CMS/actions/UploadAction';
import {connect} from 'react-redux';
import pen_banner from '../../images/pen_banner.jpg';
import ProductCard from '../BaseComponent/ProcuctCard';


class Pen extends React.Component {
    componentWillMount = () =>{
        this.props.fetchProduct();
    }
    render(){
        const {pens} = this.props;
        console.log(pens);
        return(
        <>
            <HeaderBanner tag="Pen & Pencil" bannerImg={`url(${pen_banner})`} />
            <ProductCard data={pens}/>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    let penData = [];
    state.products.length!==0 && state.products.map((product,index)=>{
        product.collection.stringValue === 'pens' && penData.push(product);
    })
    return { 
        pens: penData
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProduct: () => {
            dispatch(fetchProduct())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pen);