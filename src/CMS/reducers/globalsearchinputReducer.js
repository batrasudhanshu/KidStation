const globalsearchinputReducer = (state='', action) =>{
    switch (action.type) {
        case 'GLOBAL_SEARCH_INPUT':
            state = action.data;
            return state;
        default:
            return state;
    }
}
export default globalsearchinputReducer;