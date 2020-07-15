import React, { Component } from "react";
import {
  Checkbox,
  ListItemText,
  FormControlLabel,
  Chip,
  Grid,
} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import { fetchProductOnFilter } from "../../CMS/actions/fetchProductAction";
import DoneIcon from "@material-ui/icons/Done";

class FilterSortMain extends Component {
  state = {
    open: false,
    filter: [],
    sort: "",
    isDisabled: true,
    bestselling: false,
  };
  FilterSortProducts = () => {
    this.props.fetchProductOnFilter(this.state);
    this.handleClose();
  };

  handleChangeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };
  handleChangeSort = async (e) => {
    await this.setState({ sort: e.target.value });
    this.props.fetchProductOnFilter(this.state);
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChangeBestSelling = async () => {
    await this.setState((prevState) => ({
      bestselling: !prevState.bestselling,
    }));
    this.props.fetchProductOnFilter(this.state);
  };
  handleChip = async (name) => {
    const { filter } = this.state;
    let arr = filter;
    if (arr.includes(name)) {
      arr = arr.filter((item) => item !== name);
      console.log(arr);
    } else {
      arr.push(name);
    }
    await this.setState({ filter: arr });
    this.props.fetchProductOnFilter(this.state);
  };

  render() {
    const { open, filter, sort, bestselling } = this.state;
    const filterNames = [
      "erasers",
      "lunch_boxes",
      "water_bottles",
      "pens",
      "markers",
      "notebooks",
      "geometry_boxes",
      "bags",
    ];
    return (
      <div>
        <div>
          <Grid container spacing={3}>
            <Grid item sm={9}>
              <div style={{ textAlign: "center" }}>
                  <Grid container spacing={0}>
                  {filterNames.map((item,i) => (
                      <Grid 
                      style={(i===3 | i===7 ) ? { borderRight: '0px solid black' } : { borderRight: "1px solid black" }}
                      item sm={3}>
                  <Chip
                    className="filter-chip"
                    label={item}
                    style={
                      filter.includes(item)
                        ? {
                            backgroundColor: "saddlebrown",
                            color: "whitesmoke",
                          }
                        : { backgroundColor: "lightgray" }
                    }
                    key={item}
                    value={item}
                    onClick={() => this.handleChip(item)}
                    deleteIcon={
                      filter.includes(item) ? (
                        <DoneIcon style={{ color: "white" }} />
                      ) : null
                    }
                  />
                  
                  </Grid>
                ))}

                  </Grid>
                
              </div>
            </Grid>
            <Grid item sm={3}>
              <Chip
                className="bestselling-chip"
                label="Best Selling"
                onClick={this.handleChangeBestSelling}
                value="bestselling"
              />

              <div className="filter-sort-form-sortby">
                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">
                    Sort By:
                  </InputLabel>
                  <Select
                    label="Sort by:"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={sort}
                    onChange={this.handleChangeSort}
                    //   input={<Input />}
                  >
                    <MenuItem value="">
                      <em>Default</em>
                    </MenuItem>
                    <MenuItem value={"productname"}>Name</MenuItem>
                    <MenuItem value={"lowtohigh"}>Price : Low to High</MenuItem>
                    <MenuItem value={"hightolow"}>Price : High to Low</MenuItem>
                    <MenuItem value={"timestamp"}>Recently Added</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* {filterNames.map((item) => (
          <Chip
            label={item}
            style={
              filter.includes(item)
                ? { backgroundColor: "saddlebrown", color: "whitesmoke" }
                : { backgroundColor: "lightgray" }
            }
            key={item}
            value={item}
            onClick={() => this.handleChip(item)}
            deleteIcon={
              filter.includes(item) ? (
                <DoneIcon style={{ color: "white" }} />
              ) : null
            }
          />
        ))}
        <Chip
          label="Best Selling"
          onClick={this.handleChangeBestSelling}
          value="bestselling"
        />

        <div className="filter-sort-form-sortby">
          <InputLabel id="demo-dialog-select-label">Sort By:</InputLabel>
          <Select
            value={sort}
            onChange={this.handleChangeSort}
            input={<Input />}
          >
            <MenuItem value="">
              <em>Default</em>
            </MenuItem>
            <MenuItem value={"productname"}>Name</MenuItem>
            <MenuItem value={"lowtohigh"}>Price : Low to High</MenuItem>
            <MenuItem value={"hightolow"}>Price : High to Low</MenuItem>
            <MenuItem value={"timestamp"}>Recently Added</MenuItem>
          </Select>
        </div> */}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProductOnFilter: (data) => {
      dispatch(fetchProductOnFilter(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterSortMain);
