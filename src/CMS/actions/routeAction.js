export const routeHandler = (param) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    // let baseUrl = param.url.split("/")[0];
    let idUrl = param.url.split("/")[2];
    // console.log("idurl", idUrl);

    // console.log("PROD:", products);
    const products = getState().products;
    if (products.length !== 0) {
      let urlExists = products.filter((prod) => {
        return prod.productid.stringValue == idUrl;
      });
      // console.log("URLEXIST", urlExists);
      if (urlExists.length !== 0) {
        dispatch({ type: "URL_EXISTED", payload: true });
      } else dispatch({ type: "URL_EXISTED", payload: false });
    }
  };
};
