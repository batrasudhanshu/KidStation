const routeHandleReducer = (state=false, action) =>{
    switch (action.type) {
        case 'URL_EXISTED':
            // console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}
export default routeHandleReducer;