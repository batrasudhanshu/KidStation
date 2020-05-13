const fileReducer = (state=[], action) =>{
    switch (action.type) {
        case 'SET_FILE':
            // console.log("Products fetched");
            // console.log(action);
            return action.payload;
        default:
            return state;
    }
}
export default fileReducer;

