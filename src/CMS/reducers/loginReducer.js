const loginReducer = (state = [], action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return action.payload;
    default:
      return state;
  }
};

export default loginReducer;
