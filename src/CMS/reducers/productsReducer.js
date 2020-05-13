const initproduct = {
    product:[]
}

const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ALL_PRODUCT':
            // state.product = action.data;
            // console.log("Products fetched");
            // console.log(action);
            return action.data;
        default:
            return state;
    }
};
        
export default productsReducer;