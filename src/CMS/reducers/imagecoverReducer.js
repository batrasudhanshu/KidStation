const imagecoverReducer = (state=0, action) =>{
    switch (action.type) {
        case 'SET_COVER_IMAGE':
            // console.log("Products fetched");
            // console.log(action);
            return action.payload;
        default:
            return state;
    }
}
export default imagecoverReducer;