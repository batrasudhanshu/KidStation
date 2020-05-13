import React from 'react';
import {connect} from 'react-redux';
import {fetchProduct} from '../actions/UploadAction';
import ProductCrudList from './ProductCrudList'

class ProductCrud extends React.Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentWillMount = () =>{
        this.props.fetchProduct();
    }
    render(){
        const {products} = this.props;
        console.log(products);
        
        return (
            <div>
                <div className="">
                    <h2 style={{textAlign:'center', margin:'20px'}}>PRODUCTS</h2>
                    <ProductCrudList products={products} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return { 
        products: state.products
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