import uploadReducer from './uploadReducer'
import EraserReducer from '../../collections/erasers/reducers/EraserReducer';

import { combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
  upload: uploadReducer,
  firestore : firestoreReducer,
  firebase:firebaseReducer,
  erasercollection: EraserReducer
});

export default rootReducer