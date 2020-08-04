import uploadReducer from "./uploadReducer";
import EraserReducer from "../../collections/erasers/reducers/EraserReducer";
import productsReducer from "./productsReducer";
import progressReducer from "./progressReducer";
import fileReducer from "./fileReducer";
import SelectedProductReducer from "./SelectedProductReducer";
import searchReducer from "./searchReducer";
import globalSearchReducer from "./globalSearchReducer";
import filtersortReducer from "./filtersortReducer";
import searchedproductsReducer from "./searchedproductsReducer";
import searchFilterSortReducer from "./searchFilterSortReducer";
import emptysearchbarReducer from "./emptysearchbarReducer";
import globalsearchinputReducer from "./globalsearchinputReducer";
import loginReducer from "./loginReducer";
import loginerrorReducer from "./loginerrorReducer";

import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  loggedIn: loginReducer,
  loginError: loginerrorReducer,
  searchedFilterSort: searchFilterSortReducer,
  searchInput: globalsearchinputReducer,
  emptySearch: emptysearchbarReducer,
  globalSearch: globalSearchReducer,
  searchedProducts: searchedproductsReducer,
  filtersort: filtersortReducer,
  filterProduct: searchReducer,
  SelectedProduct: SelectedProductReducer,
  files: fileReducer,
  products: productsReducer,
  upload: uploadReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  progress: progressReducer,
  erasercollection: EraserReducer,
});

export default rootReducer;
