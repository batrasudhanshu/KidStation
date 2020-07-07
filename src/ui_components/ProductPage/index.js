import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Container, Button, Breadcrumbs } from '@material-ui/core';
import {fetchProduct} from '../../CMS/actions/UploadAction';
import Slider from "react-slick";
import {Link} from 'react-router-dom'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from '@material-ui/lab/Skeleton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ShareComponent from './shareComponent';
import {WhatsappShareButton} from 'react-share';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

class ProductPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            SelectedImage: this.props.currentProduct_FrontEnd.length!=0 && this.props.currentProduct_FrontEnd.image_url.arrayValue.values[0].stringValue
        }
        this.handleImageSelection = this.handleImageSelection.bind(this);
        this.nextFun = this.nextFun.bind(this);
        this.prevFun = this.prevFun.bind(this);
    }
    
    componentWillReceiveProps = (nextProps, prevState) => {
        if(this.props!==nextProps){
            if(nextProps.currentProduct_FrontEnd.length!=0){
                let imgUrl = nextProps.currentProduct_FrontEnd.image_url.arrayValue.values[0].stringValue;
                return(
                    this.setState((state)=>({SelectedImage: imgUrl }))
                )
            }
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    handleImageSelection = (image) =>{
        console.log('change image',image.stringValue);
        this.setState({SelectedImage:image.stringValue})
    }
    nextFun = () =>{
        this.slider.slickNext();
    }
    prevFun = ()=>{
        this.slider.slickPrev();
    }
    render() {
        
        console.log("State value check",this.state);
        const {currentProduct_FrontEnd} = this.props;
        console.log(currentProduct_FrontEnd);
        let product = currentProduct_FrontEnd.length!=0 && currentProduct_FrontEnd;
        const imageLength = product && product.image && product.image_url.arrayValue.values.length;
        const settings = {
            dots: false,
            infinite: imageLength>4,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows:false
        };
        let character = /#/g;
        let descArray = [];
        let description = product.productdescription && product.productdescription.stringValue;
        descArray = description!=undefined && description.split('#');
        let urlVal = product.productname && "https://api.whatsapp.com/send?phone=919999089262&text=I would like to know more about: *"+product.productname.stringValue+"*, https://kidstation-version1.firebaseapp.com/"+product.collection.stringValue+"/"+product.productid.stringValue;
        return (
            <div>
                <Container>
                {product ?(
                    <>
                <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div className="shop-title">
                                Product Details
                            </div>
                        </Grid>
                </Grid>
                <Grid container spacing={3}>


                        <Grid className="pro-main-image"  item xs={12} sm={6}>
                            <div className="product-main-image"> 
                                <img  src={this.state.SelectedImage} width="100%"/>
                            </div>
                        </Grid>
                        <Grid className="pro-main-details"   item xs={12} sm={6} >
                            <div>
                                <div className="product-page-breadcrumb">
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link to="/">
                                        Home
                                    </Link>
                                    <Link to={`/${product.collection.stringValue}`} >
                                        {product.collection.stringValue[0].toUpperCase()+product.collection.stringValue.slice(1)}
                                    </Link>
                                    <Link
                                        color="textPrimary"
                                        href="/components/breadcrumbs/"
                                        aria-current="page"
                                    >
                                        {product.productname.stringValue[0].toUpperCase()+product.productname.stringValue.slice(1)}
                                    </Link>
                                </Breadcrumbs>
                                </div>
                                <div style={{fontSize:'4rem', margin:'1rem 0', fontFamily: 'Lobster'}}>
                                    {product.productname.stringValue[0].toUpperCase()+product.productname.stringValue.slice(1)}
                                </div>
                                <div style={{fontSize:'3rem', fontWeight:'500',margin:'0.5rem 0', color:'#333', fontFamily: 'Piedra'}}>
                                    &#8377; {product.productprice.stringValue}
                                </div>
                                <div style={{fontSize:'2rem', color:'#444'}}>
                                    {descArray.map(desc=>(
                                        <div>
                                            <li>{desc}</li>
                                        </div>
                                    ))}
                                </div>
                                <div className="buy-connect-btn">
                                    <a href={urlVal}>BUY/CONNECT</a>
                                </div>
                                <div>
                                    <h5 style={{marginTop:'1rem', color:'#777'}}>
                                        Product color may slightly vary due to photographic lighting sources or your monitor settings**
                                    </h5>
                                </div>
                                <div>
                                    <ShareComponent url="www.google.com"  text="Check out this website: www.google.com"/>
                                </div>
                                {/* url={`localhost:3000/${product.collection.stringValue}/${product.productid.stringValue}`} */}
                            </div>
                        </Grid>
                        
                        <Grid className="pro-main-slider" item xs={12} sm={6} alignItems={'center'}>
                            <div className="prod-slick-outer" style={{textAlign:'center',position:'relative'}}>
                                <div>
                                    <ChevronLeftIcon className="icon-left" onClick={this.prevFun} style={{position:'absolute',top:'50%', transform:'translateY(-50%)', left:'0', zIndex:'999', fontSize:'4rem', cursor:'pointer', backgroundColor:'rgba(255,255,255,0.8)'}} fontSize="large" />
                                </div>
                                <Slider className="product-page-slick" ref={c => (this.slider = c)} {...settings}>
                                    {product.image_url.arrayValue.values.length!==0 ? product.image_url.arrayValue.values.map(img=>(
                                            <Grid item>
                                                    <Button onClick={()=>this.handleImageSelection(img)}>
                                                    <div style={{height: '100%',
                                                        width:'100%',
                                                        overflow: 'hidden',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'}}>
                                                    
                                                        <img style={{height: '100%',
                                                        width:'100%',
                                                        
                                                        objectFit: 'cover',
                                                        }} 
                                                        src={img.stringValue} />
                                                        
                                                    </div>
                                                    </Button>
                                                
                                             </Grid>
                                            
                                        )):(
                                            [0,1,2,3].map(skeleton=>(
                                                <Grid item>
                                                    <div key={skeleton}>
                                                        <Skeleton variant={'rect'} width="100%" height="15rem" />
                                                    </div>
                                                </Grid>    
                                            ))
                                    )}
                                </Slider>
                                <div>
                                    <ChevronRightIcon onClick={this.nextFun} style={{position:'absolute',top:'50%', transform:'translateY(-50%)' ,right:0, zIndex:'999', fontSize:'4rem', cursor:'pointer', backgroundColor:'rgba(255,255,255,0.8)'}} fontSize="large" /> 
                                </div>
                            </div>
                        </Grid>
                    
                </Grid>
                    
                </>
                ):(
                    <Grid container spacing={3}>
                        Hey
                    </Grid>
                )}
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    let currentProduct;
    // console.log(state);
    state.products.length!=0 && state.products.map(product=>{
        if(product.productid && product.productid.stringValue==id){
            currentProduct = product;
        }
    });
    console.log(currentProduct)
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