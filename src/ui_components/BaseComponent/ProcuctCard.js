import React from 'react';
import { Card, CardActionArea, CardContent, Button, Typography,CardMedia, CardActions, Grid } from '@material-ui/core';
import {Link } from 'react-router-dom';
import eraser_banner from '../../images/eraser_banner.jpg';
import SearchIcon from '@material-ui/icons/Search';
import ShareIcon from '@material-ui/icons/Share';

const ProcuctCard = (props) => {
    const {data} = props;
    return (
        <Grid className="product-card-outer" container spacing={4}>
            {data && data.map((product,i)=>{
                return(
                    <Grid item xs={12} sm={4} md={4} lg={3} >
                        <div className="card-layout">
                            <div className="card-image">
                                <img src={product.image_url.arrayValue.values[0].stringValue} />
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
                )
            })}
        </Grid>
    )
}

export default ProcuctCard
