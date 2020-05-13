const initprogress = {
    value:0
} 

const progressReducer = (state = initprogress, action) => {
    switch (action.type) {
        case 'progress':
            state.value = action.value
            console.log(action.value);
            return state;
        default:
          return state;
        
    }
};
  
export default progressReducer;