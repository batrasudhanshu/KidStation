import React from 'react'
import '../../styles/header_banner.css';
import HeaderBanner from '../BaseComponent/HeaderBanner';
import {fetchProduct} from '../../CMS/actions/UploadAction';
import {connect} from 'react-redux';
import notebook_banner from '../../images/notebook_banner.jpg';
import ProductCard from '../BaseComponent/ProcuctCard';


class Notebook extends React.Component {
    componentWillMount = () =>{
        this.props.fetchProduct();
    }
    render(){
        const {notebooks} = this.props;
        // console.log(notebooks);
        return(
        <>
            <HeaderBanner tag="Notebook & Register" bannerImg={`url(${notebook_banner})`} />
            <ProductCard data={notebooks}/>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    let notebookData = [];
    state.products.length!==0 && state.products.map((product,index)=>{
        product.collection.stringValue === 'notebooks' && notebookData.push(product);
    })
    return { 
        notebooks: notebookData
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProduct: () => {
            dispatch(fetchProduct())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Notebook);