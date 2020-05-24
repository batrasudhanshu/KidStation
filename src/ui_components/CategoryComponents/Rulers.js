import React from 'react'
import '../../styles/header_banner.css';
import HeaderBanner from '../BaseComponent/HeaderBanner';
import {fetchProduct} from '../../CMS/actions/UploadAction';
import {connect} from 'react-redux';
import ruler_banner from '../../images/ruler_banner.png';
import ProductCard from '../BaseComponent/ProcuctCard';


class Ruler extends React.Component {
    componentWillMount = () =>{
        this.props.fetchProduct();
    }
    render(){
        const {rulers} = this.props;
        // console.log(rulers);
        return(
        <>
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
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProduct: () => {
            dispatch(fetchProduct())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ruler);