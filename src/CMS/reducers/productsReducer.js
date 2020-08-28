const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "ALL_PRODUCT":
      return action.data;
    default:
      return state;
  }
};

export default productsReducer;
