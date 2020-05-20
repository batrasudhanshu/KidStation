const searchReducer = (state=[], action) =>{
    switch (action.type) {
        case 'SEARCH':
            // console.log("Products fetched");
            // console.log(action);
            return action.data;
        default:
            return state;
    }
}
export default searchReducer;

