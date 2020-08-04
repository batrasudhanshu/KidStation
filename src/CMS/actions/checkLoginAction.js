import { getFirebase } from "react-redux-firebase";

export const checkLogin = () => {
  return (dispatch) => {
    const firebase = getFirebase();
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        dispatch({ type: "LOGGED_IN", payload: true });
        // ...
      } else {
        // User is signed out.
        // ...
        dispatch({ type: "LOGGED_IN", payload: false });
      }
    });
  };
};
