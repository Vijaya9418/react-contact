import React,{ Component } from 'react'
import {Link, link} from 'react-router-dom';
import styles from './nav.module.css';
import firebase from "firebase/app";
import "firebase/auth";
import { Redirect } from 'react-router-dom';






export default class nav extends Component {
    logout=()=>
    {
        firebase.logout();
        window.location.href="/";
       
    }
    

    render() {
      
        return (

            
            <div>
                <nav className={styles.nav}>
           
                    <Link to='/home'>Home</Link>
                    <Link to='/fav'>Contacts</Link>
                    <Link to='/add'>Add</Link>

                    <button  className={styles.btn} onClick={this.logout}>Logout</button>
                    
                    
                </nav>
               
            </div>
        )
    }
}
