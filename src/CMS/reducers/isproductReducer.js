const isproductReducer = (state = true, action) => {
  switch (action.type) {
    case "ISPRODUCT":
      return action.payload;
    default:
      return state;
  }
};
export default isproductReducer;
