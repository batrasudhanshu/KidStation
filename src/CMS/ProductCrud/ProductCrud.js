import React from 'react';
import {connect} from 'react-redux';
import {fetchProduct} from '../actions/UploadAction';
import ProductCrudList from './ProductCrudList'
import SearchFilter from './SearchFilter';

class ProductCrud extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount = () =>{
        this.props.fetchProduct();
    }
    render(){
        const {filterProduct} = this.props;
        
        return (
            <div>
                <div className="">
                    <h2 style={{textAlign:'center', margin:'20px'}}>PRODUCTS</h2>
                    <SearchFilter />
                    <ProductCrudList products={filterProduct} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { 
        products: state.products,
        filterProduct: state.filterProduct
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProduct: () => {
            dispatch(fetchProduct())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductCrud);