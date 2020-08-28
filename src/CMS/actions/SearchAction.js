export const searchFilter = (searchValue) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let products = getState().products;
    let filteredProducts = products || [];
    filteredProducts = filteredProducts.filter((product) => {
      let productname = product.productname.stringValue.toLowerCase();
      return productname.indexOf(searchValue.toLowerCase()) !== -1;
    });

    dispatch({ type: "SEARCH", data: filteredProducts });
  };
};
export const globalSearchFilter = (searchValue) => {
  return (dispatch, getState) => {
    let products = getState().products;
    let filteredProducts = [];
    filteredProducts = products.filter((product) => {
      let productname = product.productname.stringValue.toLowerCase();
      return productname.indexOf(searchValue.toLowerCase()) !== -1;
    });

    dispatch({ type: "GLOBAL_SEARCH", data: filteredProducts });
  };
};

export const SearchedProducts = () => {
  return (dispatch, getState) => {
    let globalSearch = getState().globalSearch;
    let searchedProducts = globalSearch;
    dispatch({ type: "SEARCHED_PRODUCTS", data: searchedProducts });
    dispatch({ type: "SEARCHED_PRODUCTS_FILTER_SORT", data: searchedProducts });
  };
};
