import React, { Component } from "react";
import { Chip, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import { fetchProductOnFilter } from "../../CMS/actions/fetchProductAction";
import DoneIcon from "@material-ui/icons/Done";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import './styleComponents/FilterSort.css';

class FilterSortMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.page,
      open: false,
      filter: [],
      sort: "",
      isDisabled: true,
      bestselling: false,
      showFilSort: false,
    };
  }
  componentDidMount = () => {
    console.log(this.state);
    this.props.fetchProductOnFilter(this.state);
  };
  // componentWillUnmount = () => {
  //   store.dispatch({ type: "FILTER_SORT", data: this.props.products });
  // };

  handleChangeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };
  handleChangeSort = async (e) => {
    await this.setState({ sort: e.target.value });
    this.props.fetchProductOnFilter(this.state);
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
    } else {
      arr.push(name);
    }
    await this.setState({ filter: arr });
    this.state.filter.length === 0 &&
      (await this.setState({ bestselling: false }));
    this.props.fetchProductOnFilter(this.state);
  };
  showFilterSort = () => {
    this.setState((prevState) => ({ showFilSort: !prevState.showFilSort }));
  };

  render() {
    const { type, filter, sort, bestselling, showFilSort } = this.state;
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
    const showCSS = {
      opacity: "1",
      width: "100%",
      height: "150px",
      transform: "translateY(0px)",
      transition: "0.3s ease-in-out",
    };
    const hideCSS = {
      width: "100%",
      overflow: "hidden",
      opacity: "0",
      height: "0",
      transform: "translateY(0px)",
      transition: "0.3s ease-in-out",
    };
    return (
      <div>
        <div style={{ float: "right" }}>
          <Button
            style={{ color: "orangered", fontSize: "1.7rem" }}
            onClick={this.showFilterSort}
          >
            Filter Sort
            {showFilSort ? (
              <ExpandLessIcon fontSize="large" />
            ) : (
                <ExpandMoreIcon fontSize="large" />
              )}
          </Button>
        </div>
        <div style={{ clear: "both" }}></div>
        <div
          className="filter-sort-web-outer"
          style={showFilSort ? showCSS : hideCSS}
        >
          <Grid container spacing={0}>
            <Grid item sm={9}>
              <div style={{ textAlign: "center" }}>
                <Grid container spacing={0}>
                  {filterNames.map((item, i) => (
                    <Grid
                      style={
                        (i === 3) | (i === 7)
                          ? { borderRight: "0px solid black" }
                          : { borderRight: "1px solid black" }
                      }
                      item
                      sm={3}
                    >
                      <Chip
                        className="filter-chip"
                        label={item}
                        style={
                          filter.includes(item)
                            ? {
                              backgroundColor: "orangered",
                              color: "whitesmoke",
                              fontSize: "1.5rem",
                            }
                            : {
                              backgroundColor: "lightgray",
                              fontSize: "1.5rem",
                            }
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
                style={
                  filter.length === 0 || type === "bestSellingPage"
                    ? { opacity: "0", cursor: "default", fontSize: "1.5rem" }
                    : bestselling
                      ? {
                        backgroundColor: "#3f51b5",
                        opacity: 1,
                        fontSize: "1.5rem",
                      }
                      : {
                        backgroundColor: "#A9CCE3",
                        opacity: 1,
                        fontSize: "1.5rem",
                      }
                }
                disabled={filter.length === 0 ? true : false}
                // style={{ backgroundColor: "#555" }}
                className={`bestselling-chip `}
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
                    value={sort || "default"}
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
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProductOnFilter: (data) => {
      dispatch(fetchProductOnFilter(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterSortMain);
