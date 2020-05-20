import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware,compose} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import 'leaflet/dist/leaflet.css';
import rootReducer from './CMS/reducers/rootReducer';



const store = createStore(rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
  reduxFirestore(fbConfig),
  reactReduxFirebase(fbConfig)
  )
  );





const rootEl = document.getElementById('root');
let render = () => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, rootEl)
}

if(module.hot){
  module.hot.accept('./App',()=> {
    setTimeout(render);
  })
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
