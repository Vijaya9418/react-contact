import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './lay/nav';
import View from './lay/view';
import Add from './lay/add';
import Login from './lay/login';
import store from './store';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebase from 'firebase/app'
import { createFirestoreInstance } from 'redux-firestore'


import React from 'react'

export default function App() {
    const rrfConfig = {
        userProfile: 'users',
        useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    }
    const rrfProps = {
        firebase,
        config: rrfConfig,
        dispatch: store.dispatch,
        createFirestoreInstance
    }
    return (
        < Provider store={store} >
            <ReactReduxFirebaseProvider {...rrfProps}>



                <div className="App">
                    <Router>
                        <Route path='/home'><Nav /></Route>
                        <Route exact path='/home'><View /></Route>
                        <Route exact path='/add'><Add /></Route>
                        <Route exact path='/'><Login /></Route>


                        {/* // we use switch when we want to show the not available page */}
                        <Switch>
                            <Route path='/'><h1>HOme</h1></Route>
                            <Route><h1>Page not available sorry!</h1></Route>
                        </Switch>
                    </Router>
                </div>


            </ReactReduxFirebaseProvider>
        </Provider>
    );
}