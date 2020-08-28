import React, { Component } from "react";
import { Checkbox, ListItemText, FormControlLabel } from "@material-ui/core";
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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

class FilterSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.page,
      open: false,
      filter: [],
      sort: "",
      bestselling: false,
    };
  }

  FilterSortProducts = () => {
    this.props.fetchProductOnFilter(this.state);
    this.handleClose();
  };

  handleChangeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };
  handleChangeSort = (e) => {
    this.setState({ sort: e.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChangeBestSelling = () => {
    this.setState((prevState) => ({ bestselling: !prevState.bestselling }));
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
        <Button className="filter-sort-btn" onClick={this.handleClickOpen}>
          Filter Sort
          {open ? (
            <ExpandLessIcon fontSize="large" />
          ) : (
            <ExpandMoreIcon fontSize="large" />
          )}
        </Button>
        <Dialog
          className="filter-sort-dialog"
          maxWidth={"lg"}
          disableBackdropClick
          disableEscapeKeyDown
          open={open}
          onClose={this.handleClose}
        >
          <DialogTitle className="filter-sort-dialog-title">
            Fill the Fields
          </DialogTitle>
          <DialogContent>
            <form className="filter-sort-form">
              {/* filter by collection name */}
              <FormControl className="filter-sort-form-filtercontrol">
                <InputLabel htmlFor="demo-dialog-native">Filter By:</InputLabel>
                <Select
                  multiple
                  value={filter}
                  onChange={this.handleChangeFilter}
                  input={<Input />}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {filterNames.map((name, i) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={filter.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* sort */}
              <FormControl className="filter-sort-form-sortcontrol">
                <div className="filter-sort-form-sortby">
                  <InputLabel id="demo-dialog-select-label">
                    Sort By:
                  </InputLabel>
                  <Select
                    value={sort}
                    onChange={this.handleChangeSort}
                    input={<Input />}
                  >
                    <MenuItem value={"default"}>Default</MenuItem>
                    <MenuItem value={"productname"}>Name</MenuItem>
                    <MenuItem value={"lowtohigh"}>Price : Low to High</MenuItem>
                    <MenuItem value={"hightolow"}>Price : High to Low</MenuItem>
                    <MenuItem value={"timestamp"}>Recently Added</MenuItem>
                  </Select>
                </div>
                <FormControlLabel
                  disabled={filter.length !== 0 ? false : true}
                  className="filter-sort-form-checkbox"
                  name="bestselling"
                  checked={bestselling}
                  onChange={this.handleChangeBestSelling}
                  control={
                    <Checkbox
                      color="primary"
                      icon={
                        <CheckBoxOutlineBlankIcon
                          style={{ width: 25, height: 25 }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxIcon style={{ width: 25, height: 25 }} />
                      }
                    />
                  }
                  label="Best Selling"
                  labelPlacement="End"
                />
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.FilterSortProducts} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterSort);
