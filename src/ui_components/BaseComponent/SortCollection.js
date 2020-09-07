import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { fetchProductOnSort } from "../../CMS/actions/fetchProductAction";
import { connect } from "react-redux";

class SortCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: this.props.sortType || "Default",
    };
  }
  handleChangeSort = async (e) => {
    await this.setState({ sort: e.target.value });
    this.props.fetchProductOnSort(this.state);
  };
  render() {
    const { sort } = this.state;
    const { sortType } = this.props;
    return (
      <div className="collection-sort" style={{ float: "right" }}>
        <div className="filter-sort-form-sortby">
          <FormControl variant="outlined">
            <InputLabel
              style={{ color: "saddleBrown" }}
              id="demo-simple-select-outlined-label"
            >
              Sort By:
            </InputLabel>
            <Select
              label="Sort by:"
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={sortType}
              onChange={this.handleChangeSort}
              //   input={<Input />}
            >
              <MenuItem value={"default"}>Default</MenuItem>
              <MenuItem value={"productname"}>Name</MenuItem>
              <MenuItem value={"lowtohigh"}>Price : Low to High</MenuItem>
              <MenuItem value={"hightolow"}>Price : High to Low</MenuItem>
              <MenuItem value={"timestamp"}>Recently Added</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sortType: state.collectionSortType,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProductOnSort: (data) => {
      dispatch(fetchProductOnSort(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SortCollection);
