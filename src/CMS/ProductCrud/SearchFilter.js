import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../../index";
import {
  TextField,
  InputAdornment,
  ListItem,
  List,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import { globalSearchFilter, SearchedProducts } from "../actions/SearchAction";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";

class SearchFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      hideList: true,
      width: window.innerWidth,
    };
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.handleResize);
  };
  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };
  handleChange = (e) => {
    store.dispatch({ type: "GLOBAL_SEARCH_INPUT", data: e.target.value });
    this.setState({ hideList: false, productname: e.target.value });

    if (e.target.value.length == 0) {
      this.setState({ hideList: true });
      return;
    }
    this.props.globalSearchFilter(e.target.value);
  };
  searchProducts = () => {
    let searchValue = store.getState().searchInput;
    store.dispatch({ type: "EMPTY_SEARCH_BAR", data: false });
    this.setState({ hideList: true });
    if (searchValue.length == 0) {
      store.dispatch({ type: "EMPTY_SEARCH_BAR", data: true });
    }
    this.props.SearchedProducts();
  };
  selectedProduct = (productName) => {
    this.setState({ hideList: true });
    store.dispatch({ type: "GLOBAL_SEARCH_INPUT", data: productName });
  };
  render() {
    const { products, globalSearch, searchInput } = this.props;
    const { hideList, width } = this.state;
    let globalSearchList =
      globalSearch.length != 0 &&
      globalSearch.map((option) => (
        <ListItem
          onClick={() => {
            this.selectedProduct(option.productname.stringValue);
          }}
          component={Link}
          to={
            "/" +
            option.collection.stringValue +
            "/" +
            option.productid.stringValue
          }
        >
          <ListItemText
            style={{ color: "#444" }}
            primary={option.productname.stringValue}
          />
        </ListItem>
      ));
    let globalSlicedSearchList = globalSearch.slice(0, 6).map((option) => (
      <ListItem
        onClick={() => {
          this.selectedProduct(option.productname.stringValue);
        }}
        component={Link}
        to={
          "/" +
          option.collection.stringValue +
          "/" +
          option.productid.stringValue
        }
      >
        <ListItemText
          style={{ color: "#444" }}
          primary={option.productname.stringValue}
        />
      </ListItem>
    ));
    return (
      <>
        {width < 900 && (
          <div className="global-search">
            <div className="global-search-input">
              <Paper
                elevation={5}
                component="form"
              >
                <InputBase
                  autoComplete="off"
                  fullWidth={"true"}
                  onChange={this.handleChange}
                  placeholder="What are you looking for ?"
                  color={"primary"}
                  value={searchInput}
                  endAdornment={
                    <InputAdornment position="end">
                      <Link to="/searchresult">
                        <IconButton
                          type="submit"
                          onClick={this.searchProducts}
                          aria-label="search"
                        >
                          <SearchSharpIcon />
                        </IconButton>
                      </Link>
                    </InputAdornment>
                  }
                />
              </Paper>
            </div>
            <List style={hideList ? { display: "none" } : { display: "block" }}>
              {globalSearch.length != 0 &&
                (globalSearch.length < 6 ? (
                  <>{globalSearchList}</>
                ) : (
                  <>
                    {globalSlicedSearchList}
                    <ListItem
                      button
                      component={Link}
                      to="/searchresult"
                      onClick={this.searchProducts}
                    >
                      <ListItemText
                        style={{ color: "#444" }}
                        primary="View more..."
                      />
                    </ListItem>
                  </>
                ))}
            </List>
            <List
              style={hideList ? { display: "none" } : { display: "block" }}
            ></List>
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    globalSearch: state.globalSearch,
    searchInput: state.searchInput,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    globalSearchFilter: (searchValue) => {
      dispatch(globalSearchFilter(searchValue));
    },
    SearchedProducts: () => {
      dispatch(SearchedProducts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);
