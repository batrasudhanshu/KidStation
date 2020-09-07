import uploadReducer from "./uploadReducer";
import EraserReducer from "../../collections/erasers/reducers/EraserReducer";
import productsReducer from "./productsReducer";
import progressReducer from "./progressReducer";
import fileReducer from "./fileReducer";
import SelectedProductReducer from "./SelectedProductReducer";
import searchReducer from "./searchReducer";
import globalSearchReducer from "./globalSearchReducer";
import filtersortReducer from "./filtersortReducer";
import deleteProductReducer from "./deleteProductReducer";
import searchedproductsReducer from "./searchedproductsReducer";
import searchFilterSortReducer from "./searchFilterSortReducer";
import emptysearchbarReducer from "./emptysearchbarReducer";
import globalsearchinputReducer from "./globalsearchinputReducer";
import loginReducer from "./loginReducer";
import loginerrorReducer from "./loginerrorReducer";
import imagecoverReducer from "./imagecoverReducer";
import uploadedsuccessReducer from "./uploadsuccessReducer";
import currentproductReducer from "./currentproductReducer";
import isproductReducer from "./isproductReducer";
import collectionsortReducer from "./collectionsortReducer";

import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  collectionSortType: collectionsortReducer,
  isProduct: isproductReducer,
  deleteReducer: deleteProductReducer,
  currentProduct: currentproductReducer,
  uploadSuccess: uploadedsuccessReducer,
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
  coverIndex: imagecoverReducer,
  progress: progressReducer,
  erasercollection: EraserReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
