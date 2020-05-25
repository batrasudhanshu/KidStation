import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

class ProductDetailComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} >Product Details</Grid>
                    <Grid item xs={12} sm={6}></Grid>
                    <Grid item xs={12} sm={6}></Grid>
                </Grid>
            </div>
        )
    }
}

export default ProductDetailComponent;
