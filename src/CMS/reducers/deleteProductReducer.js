const deleteProductReducer = (state = 0, action) => {
  switch (action.type) {
    case "DELETE_PRODUCT":
      return state + 1;
    default:
      return state;
  }
};

export default deleteProductReducer;
