const loginerrorReducer = (state = "", action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return action.payload;
    default:
      return state;
  }
};

export default loginerrorReducer;
