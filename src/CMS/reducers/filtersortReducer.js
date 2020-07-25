const filtersortReducer = (state=[], action) =>{
    switch (action.type) {
        case 'FILTER_SORT':
            state = action.data
            console.log(state);
            return state;
        default:
            return state;
    }
}
export default filtersortReducer;

