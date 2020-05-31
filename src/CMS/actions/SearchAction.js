export const searchFilter = (searchValue) =>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{
        let products = getState().products;
        let filteredProducts= products || [];
        filteredProducts = filteredProducts.filter((product)=>{
            let productname=product.productname.stringValue.toLowerCase();
            return productname.indexOf(searchValue.toLowerCase()) !== -1
        })
        console.log("Filter:",filteredProducts);
        dispatch({type:'SEARCH', data:filteredProducts});
    }
} 
export const globalSearchFilter = (searchValue) => {
    return (dispatch, getState) => {
        let products = getState().products;
        let filteredProducts= products || [];
        filteredProducts = filteredProducts.filter((product)=>{
            let productname=product.productname.stringValue.toLowerCase();
            return productname.indexOf(searchValue.toLowerCase()) !== -1
        })
        // console.log("Filter:",filteredProducts);
        dispatch({type:'GLOBAL_SEARCH', data:filteredProducts});
    }
}