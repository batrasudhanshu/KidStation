const collectionsortReducer = (state = "default", action) => {
  switch (action.type) {
    case "COLLECTION_SORT_TYPE":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export default collectionsortReducer;
