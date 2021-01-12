// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCcWKn_A4gv4OdcaCdtNgmSK4iC78lxuyI",
    authDomain: "e-clone-ad92b.firebaseapp.com",
    projectId: "e-clone-ad92b",
    storageBucket: "e-clone-ad92b.appspot.com",
    messagingSenderId: "321772039253",
    appId: "1:321772039253:web:4c6c6475c3d3137085f8dc",
    measurementId: "G-GSVQSM57XM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
