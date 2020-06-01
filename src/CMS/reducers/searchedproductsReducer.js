const searchedproductsReducer = (state=[], action) =>{
    switch (action.type) {
        case 'SEARCHED_PRODUCTS':
            state = action.data
            console.log(state);
            return state;
        default:
            return state;
    }
}
export default searchedproductsReducer;

