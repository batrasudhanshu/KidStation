const loginReducer = (state=[], action) =>{
    switch (action.type) {
        case 'LOGGED_IN':
            // console.log("Products fetched");
            // console.log(action);
            return action.payload;
        default:
            return state;
    }
}

export default loginReducer