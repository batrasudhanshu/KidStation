const routeHandleReducer = (state = false, action) => {
  switch (action.type) {
    case "URL_EXISTED":
      return action.payload;
    default:
      return state;
  }
};
export default routeHandleReducer;
