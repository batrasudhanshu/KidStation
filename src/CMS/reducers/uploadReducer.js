// const initState = {
//     projects: [
//       {id: '1', title: 'help me find peach', content: 'blah blah blah'},
//       {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
//       {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
//     ]
//   }
  
  const projectReducer = (state = [], action) => {
    switch (action.type) {
        case 'Add_Product':
          console.log('Product Added');
          return state;
        default:
          return state;
        
    }
  };
  
  export default projectReducer;