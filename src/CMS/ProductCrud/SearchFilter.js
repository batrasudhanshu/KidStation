import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProduct} from '../actions/UploadAction';
import {searchFilter} from '../actions/SearchAction';
import { TextField, InputAdornment,ListItem,List,ListItemText } from '@material-ui/core';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import {globalSearchFilter} from '../actions/SearchAction';

class SearchFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
          productname: "",
          hideList:true
        }
    }
    handleChange = (e) =>{
        this.setState({hideList:false, productname:e.target.value})

        if(e.target.value.length==0){
            this.setState({hideList:true})
        }
        this.props.globalSearchFilter(e.target.value);
    }
    render() {
        const {products, globalSearch} = this.props;
        const {hideList} = this.state;
        return (
            <div className="global-search">
                <TextField onChange={this.handleChange} InputProps={{endAdornment: <InputAdornment style={{marginRight:'1rem', width:'2rem'}}><SearchSharpIcon fontSize="large" style={{color:'blue'}} /></InputAdornment>}} placeholder={'Search...'} value={this.state.productname} type="search" variant="outlined" />
                {/* <div className="search-list"> */}
                <List style={hideList?({display:'none'}):({display:'block'})} component="nav">
                    {globalSearch.length!=0 && (globalSearch.length<6 ? (
                            globalSearch.map(option=>(
                            <ListItem button>
                            <ListItemText primary={option.productname.stringValue} />
                        </ListItem>
                        ))
                    ):(
                        globalSearch.slice(0,6).map(option=>(
                            <ListItem button>
                            <ListItemText primary={option.productname.stringValue} />
                        </ListItem>
                        ))
                    ))}
                </List>
                {/* </div> */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return { 
        products: state.products,
        globalSearch: state.globalSearch
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        globalSearchFilter: (searchValue) =>{
            dispatch(globalSearchFilter(searchValue))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter)