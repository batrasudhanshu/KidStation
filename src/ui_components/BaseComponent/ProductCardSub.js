import React from 'react';
import { Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShareIcon from '@material-ui/icons/Share';
import LazyLoad from 'react-lazyload';
import Skeleton from '@material-ui/lab/Skeleton';


const Loading = () => {
    return(
        <Grid item xs={12} sm={4} lg={3} >
            <div className="loaderlayout" style={{textAlign:'center'}}>
                <Skeleton variant="rect" height={300} animation="pulse"/>
            </div>
        </Grid>
    )
}

const ProductCardSub = ({product}) => {
    return (
        <>
            <Grid item xs={12} sm={4} md={4} lg={3} >
                        <div className="card-layout">
                            <div className="card-image">
                                {/* <LazyLoad once={true} key={product.id}  height={100} offset={[-100, 100]} placeholder={<Loading />} > */}
                                    <img alt=""src={product.image_url.arrayValue.values[0].stringValue} />}
                                {/* </LazyLoad> */}
                            </div>
                            <div className="card-overlay"></div>
                            <div className="card-bottom">
                                <div className="card-icons">
                                    <span className="card-search-icon"><SearchIcon style={{fontsize:'2rem'}} /></span>
                                    <span className="card-share-icon"><ShareIcon style={{fontsize:'2rem'}}  /></span>
                                </div>
                                <div className="card-desc">
                                    <div>{product.productname.stringValue}</div>
                                    <div className={product.soldout.booleanValue==true ? 'price-linethrough card-price':'card-price'}>
                                        &#8377;{product.productprice.stringValue}
                                    </div>
                                    <div className="soldout-outer">
                                        {product.soldout.booleanValue==true && (<span className="card-soldout">Soldout</span>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
        </>
    )
}

export default ProductCardSub
