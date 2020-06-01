import React, { Component } from 'react';
import {connect} from 'react-redux';
import { TextField, InputAdornment,ListItem,List,ListItemText, IconButton } from '@material-ui/core';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import {globalSearchFilter, SearchedProducts} from '../actions/SearchAction';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

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
    searchProducts = () =>{
        this.props.SearchedProducts();
        
    }
    render() {
        const {products, globalSearch} = this.props;
        const {hideList} = this.state;
        return (
            <div className="global-search">
                <div className="global-search-input">
                    {/* <form>
                        <TextField onChange={this.handleChange} InputProps={{endAdornment: <InputAdornment style={{marginRight:'1rem', width:'2rem'}}> <Link to ="/searchresult"> <IconButton onClick={this.searchProducts}><SearchSharpIcon fontSize="large" style={{color:'blue'}} /> </IconButton>  </Link> </InputAdornment>}} placeholder={'Search...'} value={this.state.productname} type="search" variant="outlined" />
                    </form> */}
                    <Paper elevation={5} component="form" onsubmit={this.searchProducts} >
      
      <InputBase
        fullWidth={'true'}
        onChange={this.handleChange}
        placeholder="What are you looking for ?"
        color ={'primary'}
        endAdornment={<InputAdornment position="end"><Link to ="/searchresult">
                    <IconButton  type="submit" onClick={this.searchProducts} aria-label="search">
                        <SearchSharpIcon />
                    </IconButton>
                    </Link>
                    </InputAdornment>}
        
      />
      
        </Paper>

                </div>
                {/* <div className="search-list"> */}
                <List style={hideList?({display:'none'}):({display:'block'})}>
                    {globalSearch.length!=0 && (globalSearch.length<6 ? (
                            globalSearch.map(option=>(
                            <ListItem button component={Link} to="/searchresult">
                            <ListItemText primary={option.productname.stringValue} />
                        </ListItem>
                        ))
                    ):(
                        globalSearch.slice(0,6).map(option=>(
                            <ListItem button component={Link} to={option.collection.stringValue+'/'+option.productid.stringValue+'&'+option.productname.stringValue}>
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
        },
        SearchedProducts: () =>{
            dispatch(SearchedProducts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter)