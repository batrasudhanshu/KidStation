const EraserReducer = (state = [], action) => {
    switch (action.type) {
        case 'Add_Product':
            console.log('Eraser');
            return state;
        default:
            return state;
        
    }
  };
  
  export default EraserReducer;