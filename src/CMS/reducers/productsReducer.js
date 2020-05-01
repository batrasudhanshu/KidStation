
const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ALL_PRODUCT':
            // console.log("Products fetched");
            // console.log(action);
            return action.data;
        default:
            return state;
    }
};
        
export default productsReducer;