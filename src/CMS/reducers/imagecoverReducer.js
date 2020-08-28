const imagecoverReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_COVER_IMAGE":
      return action.payload;
    default:
      return state;
  }
};
export default imagecoverReducer;
