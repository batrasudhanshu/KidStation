const globalSearchReducer = (state=[], action) =>{
    switch (action.type) {
        case 'GLOBAL_SEARCH':
            state = action.data
            return state;
        default:
            return state;
    }
}
export default globalSearchReducer;

