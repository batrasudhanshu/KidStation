const fileReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FILE":
      if (action.payload === 0) {
        state.length = 0;
        return state;
      }
      return action.payload;
    default:
      return state;
  }
};
export default fileReducer;
