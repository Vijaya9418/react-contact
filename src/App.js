import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Nav from './lay/nav';


import React from 'react'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/'><Nav /></Route>
        <Switch>
          <Route path='/'><h1>HOme</h1></Route>
          <Route><h1>Page not available sorry!</h1></Route>
        </Switch>
      </Router>
    </div>
  );
}

