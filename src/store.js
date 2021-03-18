import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux'
import {
    reactReduxFirebase,
    firebaseReducer
} from 'react-redux-firebase'

import { reduxFirestore, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

const fbConfig = {
    apiKey: "AIzaSyAUbhCgOp5MgrWOnpB8cO106z1vJqOMTxg",
    authDomain: "contact-manager-react-app.firebaseapp.com",
    projectId: "contact-manager-react-app",
    storageBucket: "contact-manager-react-app.appspot.com",
    messagingSenderId: "325604348931",
    appId: "1:325604348931:web:a91a3fef468951179f6a36",
    measurementId: "G-X7LWKV6MYM"
}


// Initialize firebase instance
firebase.initializeApp(fbConfig)
// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state reactReduxFirebase(firebase),
const initialState = {}



const store = createStore(rootReducer, initialState,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)

export default store;