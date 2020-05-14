const SelectedProductReducer = (state = [], action) => {
    switch (action.type) {
        case 'SELECTED_PRODUCT':
            return action.payload;
        default:
            return state;
    }
};
        
export default SelectedProductReducer;