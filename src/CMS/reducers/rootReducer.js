import uploadReducer from './uploadReducer'
import EraserReducer from '../../collections/erasers/reducers/EraserReducer';
import productsReducer from './productsReducer'
import progressReducer from './progressReducer';
import fileReducer from './fileReducer';
import SelectedProductReducer from './SelectedProductReducer';

import { combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'


const rootReducer = combineReducers({
  SelectedProduct: SelectedProductReducer,
  files:fileReducer,
  products:productsReducer,
  upload: uploadReducer,
  firestore : firestoreReducer,
  firebase:firebaseReducer,
  progress: progressReducer,
  erasercollection: EraserReducer
});

export default rootReducer