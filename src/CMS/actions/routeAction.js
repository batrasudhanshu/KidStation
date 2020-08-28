export const routeHandler = (param) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    let idUrl = param.url.split("/")[2];

    const products = getState().products;
    if (products.length !== 0) {
      let urlExists = products.filter((prod) => {
        return prod.productid.stringValue == idUrl;
      });

      if (urlExists.length !== 0) {
        dispatch({ type: "URL_EXISTED", payload: true });
      } else dispatch({ type: "URL_EXISTED", payload: false });
    }
  };
};
