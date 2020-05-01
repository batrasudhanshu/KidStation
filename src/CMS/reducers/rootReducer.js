import uploadReducer from './uploadReducer'
import EraserReducer from '../../collections/erasers/reducers/EraserReducer';
import productsReducer from './productsReducer'
import fileReducer from './fileReducer';
import { combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
  files:fileReducer,
  products:productsReducer,
  upload: uploadReducer,
  firestore : firestoreReducer,
  firebase:firebaseReducer,
  erasercollection: EraserReducer
});

export default rootReducer