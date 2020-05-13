import React from 'react';
import { Link } from 'react-router-dom';
import ProductCrudSummary from './ProductCrudSummary'
import { getFirestore } from 'redux-firestore';
import {Grid} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab';

const ProductCrudList = (props) => {
    const {products, isLoaded} = props;
    console.log(products);
    return (
        <div className="">
                <Grid style={{padding:'2rem'}} container  spacing={3} direction="row" justify="center" alignItems="center">
                
                {products && products.map((product,index)=>{
                    return (
                        <Grid item xs={12} sm={6} md={3}>
                            <ProductCrudSummary product={product} delete />
                        </Grid>
                    )
                })}
                </Grid>
        </div>
    )
}

export default ProductCrudList
