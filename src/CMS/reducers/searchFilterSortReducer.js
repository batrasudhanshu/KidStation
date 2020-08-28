const searchFilterSortReducer = (state = [], action) => {
  switch (action.type) {
    case "SEARCHED_PRODUCTS_FILTER_SORT":
      state = action.data;
      return state;
    default:
      return state;
  }
};
export default searchFilterSortReducer;
