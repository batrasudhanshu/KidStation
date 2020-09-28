export const fetchProductOnFilter = (data) => {
  return (dispatch, getState) => {
    let products;
    if (data.type === "shopPage") {
      products = getState().products;
    } else if (data.type === "searchResult") {
      products = getState().searchedProducts;
    } else if (data.type === "bestSellingPage") {
      products = getState().products;
    }
    let filteredProducts;
    let bestselling;
    let filtering = [];
    data.filter.length !== 0 &&
      products.map((product) => {
        data.filter.map((d) => {
          if (d === product.collection.stringValue) {
            filtering.push(product);
          }
        });
      });
    if (data.bestselling) {
      bestselling = filtering.filter(
        (product) => product.bestselling.booleanValue === true
      );
      filtering = bestselling;
    }

    if (filtering.length === 0) {
      filteredProducts = products || [];
    } else {
      filteredProducts = filtering;
    }

    function compareName(a, b) {
      const nameA = a.productname.stringValue.toUpperCase();
      const nameB = b.productname.stringValue.toUpperCase();
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }
    function comparePrice(a, b) {
      const priceA = parseInt(a.productprice.stringValue);
      const priceB = parseInt(b.productprice.stringValue);
      let comparison = 0;
      if (priceA > priceB) {
        comparison = 1;
      } else if (priceA < priceB) {
        comparison = -1;
      }
      return comparison;
    }
    function compareTimeStamp(a, b) {
      const timestampA = a.createdAt.timestampValue;
      const timestampB = b.createdAt.timestampValue;
      let comparison = 0;
      if (timestampA > timestampB) {
        comparison = 1;
      } else if (timestampA < timestampB) {
        comparison = -1;
      }
      return comparison;
    }

    switch (data.sort) {
      case "productname":
        filteredProducts = filteredProducts.sort(compareName);
        break;
      case "lowtohigh":
        filteredProducts = filteredProducts.sort(comparePrice);
        break;
      case "hightolow":
        filteredProducts.sort(comparePrice);
        filteredProducts = filteredProducts.reverse(comparePrice);
        break;
      case "timestamp":
        filteredProducts.sort(compareTimeStamp);
        filteredProducts = filteredProducts.reverse(comparePrice);
        break;
      case "default":
        filteredProducts = filteredProducts.sort(compareTimeStamp);
        break;
      default:
        break;
    }

    if (data.type === "shopPage") {
      dispatch({ type: "FILTER_SORT", data: [...filteredProducts] });
    } else if (data.type === "searchResult") {
      dispatch({
        type: "SEARCHED_PRODUCTS_FILTER_SORT",
        data: [...filteredProducts],
      });
    } else if (data.type === "bestSellingPage") {
      dispatch({ type: "FILTER_SORT", data: [...filteredProducts] });
    }
  };
};

export const fetchProductOnSort = (data) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let sortedProducts;
    // let collectionType = data.collection;
    const { products } = getState();
    sortedProducts = products;
    function compareName(a, b) {
      const nameA = a.productname.stringValue.toUpperCase();
      const nameB = b.productname.stringValue.toUpperCase();
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }
    function comparePrice(a, b) {
      const priceA = parseInt(a.productprice.stringValue);
      const priceB = parseInt(b.productprice.stringValue);
      let comparison = 0;
      if (priceA > priceB) {
        comparison = 1;
      } else if (priceA < priceB) {
        comparison = -1;
      }
      return comparison;
    }
    function compareTimeStamp(a, b) {
      const timestampA = a.createdAt.timestampValue;
      const timestampB = b.createdAt.timestampValue;
      let comparison = 0;
      if (timestampA > timestampB) {
        comparison = 1;
      } else if (timestampA < timestampB) {
        comparison = -1;
      }
      return comparison;
    }

    switch (data.sort) {
      case "productname":
        sortedProducts = sortedProducts.sort(compareName);
        break;
      case "lowtohigh":
        sortedProducts = sortedProducts.sort(comparePrice);
        break;
      case "hightolow":
        sortedProducts.sort(comparePrice);
        sortedProducts = sortedProducts.reverse(comparePrice);
        break;
      case "timestamp":
        sortedProducts.sort(compareTimeStamp);
        sortedProducts = sortedProducts.reverse(comparePrice);
        break;
      case "default":
        sortedProducts = sortedProducts.sort(compareTimeStamp);
        break;
      default:
        break;
    }
    dispatch({ type: "ALL_PRODUCT", data: [...sortedProducts] });
    dispatch({ type: "COLLECTION_SORT_TYPE", payload: data.sort });
  };
};
