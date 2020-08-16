const currentproductReducer = (state = null, action) => {
  switch (action.type) {
    case "CURRENT_PRODUCT":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export default currentproductReducer;
