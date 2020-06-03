import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Container, Button } from '@material-ui/core';
import {fetchProduct} from '../../CMS/actions/UploadAction';

class ProductPage extends Component {
    render() {
        const {currentProduct_FrontEnd} = this.props;
        console.log(currentProduct_FrontEnd);
        let product = currentProduct_FrontEnd;
        return (
            <div>
                {product && <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>Product Details</Grid>
                    <Grid item xs={12} sm={6}>
                        <div style={{textAlign:'center'}}>
                            <div style={{border:'5px solid black', width:'90%',backgroundColor:'black'}}> 
                                <img src={product.image_url.arrayValue.values[6].stringValue} width="80%"/>
                            </div>
                            <div style={{display:'flex',flexWrap:'wrap'}}>
                                {product.image_url.arrayValue.values.map((img,i)=>(
                                    <div style={{border:'5px solid black',backgroundColor:'black'}}>
                                        <img src={img.stringValue} width="60vw" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <div>
                            <div style={{fontSize:'4rem', margin:'1rem 0'}}>
                                {product.productname.stringValue}
                            </div>
                            <div style={{fontSize:'2rem', margin:'0.5rem 0', color:'#333'}}>
                                {product.productprice.stringValue}
                            </div>
                            <div style={{fontSize:'2rem', color:'#666'}}>
                                {product.productdescription.stringValue}
                            </div>
                            <Button color="primary" style={{backgroundColor:'blue', color:'whitesmoke', fontSize:'1.2rem', margin:'0.5rem'}}>Share</Button>
                            <Button color="primary" style={{backgroundColor:'green', color:'whitesmoke', fontSize:'1.2rem'}} >WhatsApp</Button>
                        </div>
                    </Grid>
                </Grid>
                </Container>}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    let currentProduct;
    console.log(state);
    state.products && state.products.map(product=>{
        if(product.productid && product.productid.stringValue==id){
            currentProduct = product;
        }
    });
    return {
        currentProduct_FrontEnd:currentProduct,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProduct: () => {
            dispatch(fetchProduct())
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage)