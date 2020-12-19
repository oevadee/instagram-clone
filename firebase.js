import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD87FxjPzYDStek-S2dQJXHbM7FnQ8nL2E",
  authDomain: "instagram-clone-85736.firebaseapp.com",
  databaseURL: "https://instagram-clone-85736.firebaseio.com",
  projectId: "instagram-clone-85736",
  storageBucket: "instagram-clone-85736.appspot.com",
  messagingSenderId: "683469171237",
  appId: "1:683469171237:ios:e27f3487631c45f07b2dcc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { firebase };
export default db;
