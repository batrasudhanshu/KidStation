import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Container, Button } from '@material-ui/core';
import {fetchProduct} from '../../CMS/actions/UploadAction';

class ProductPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    constructor(props){
        super(props);
        this.state = {
            SelectedImage: this.props.currentProduct_FrontEnd.length!=0 && this.props.currentProduct_FrontEnd.image_url.arrayValue.values[0].stringValue
        }
        this.handleImageSelection = this.handleImageSelection.bind(this);
    }
    handleImageSelection = (image) =>{
        console.log('change image',image.stringValue);
        this.setState({SelectedImage:image.stringValue})
    }
    render() {
        const {currentProduct_FrontEnd} = this.props;
        console.log(currentProduct_FrontEnd);
        let product = currentProduct_FrontEnd.length!=0 && currentProduct_FrontEnd;
        return (
            <div>
                {product && <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className="shop-title">
                            Product Details
                        </div>
                        </Grid>
                    <Grid item xs={12} sm={6} alignItems={'center'}>
                        <div className="product-images" style={{textAlign:'center'}}>
                            <div className="product-main-image"> 
                                <img  src={this.state.SelectedImage} width="100%"/>
                            </div>
                            
                            <div className="slider-outer carousel slide">
                                <div className="carousel-inner">
                                {product.image_url.arrayValue.values.map((img,i)=>(
                                    
                                    <div className="image-outer item active">
                                        <Button onClick={()=>{this.handleImageSelection(img)}}>
                                        <img src={img.stringValue} width="100%"  />
                                        </Button>
                                    </div>

                                ))}
                                <a className="left carousel-control" data-slide="prev">Prev</a><a className="right carousel-control" data-slide="next">Next</a>
                                </div>
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
                            <Button color="primary" className="share-btn">Share</Button>
                            <Button color="primary" className="whatsapp-btn">WhatsApp</Button>
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
    state.products.length!=0 && state.products.map(product=>{
        if(product.productid && product.productid.stringValue==id){
            currentProduct = product;
        }
    });
    return {
        currentProduct_FrontEnd:currentProduct || [],
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