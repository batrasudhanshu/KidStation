const emptysearchbarReducer = (state=false, action) =>{
    switch (action.type) {
        case 'EMPTY_SEARCH_BAR':
            state = action.data;
            return state;
        default:
            return state;
    }
}
export default emptysearchbarReducer;