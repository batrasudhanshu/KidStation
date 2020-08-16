const uploadedsuccessReducer = (state = 0, action) => {
  switch (action.type) {
    case "UPLOAD_SUCCESS":
      return state + 1;
    default:
      return state;
  }
};

export default uploadedsuccessReducer;
