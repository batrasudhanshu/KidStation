import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProduct} from '../actions/UploadAction';
import {searchFilter} from '../actions/SearchAction';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

class SearchFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
          productname: ""
        }
      }
      
    handleChange = (e) => {
        this.setState({
            productname: e.target.value
        })
        this.props.searchFilter(e.target.value);
    }
    componentDidMount = () =>{
        this.props.fetchProduct();
    }
    render() {
        const {products} = this.props;
        console.log(products);
        console.log(this.state.productname);
        
        return (
            <div style={{textAlign:'center'}}>
                <TextField InputProps={{endAdornment: <InputAdornment style={{marginRight:'0.5rem'}}><SearchSharpIcon fontSize="large" style={{color:'blue'}} /></InputAdornment>}} placeholder={'Search...'} value={this.state.productname} onChange={this.handleChange} type="search" variant="outlined" />
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
        },
        searchFilter: (searchValue) =>{
            dispatch(searchFilter(searchValue))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter)