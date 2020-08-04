const loginerrorReducer = (state = "", action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      // console.log("Products fetched");
      // console.log(action);
      return action.payload;
    default:
      return state;
  }
};

export default loginerrorReducer;
