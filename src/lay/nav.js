import {Link, link} from 'react-router-dom';
import styles from './nav.module.css';

import React, { Component } from 'react'

export default class nav extends Component {
    render() {
        return (
            <div>
                <nav className={styles.nav}>
                    <Link to='home'>Home</Link>
                    <Link to='fav'>fav Contacts</Link>
                </nav>
            </div>
        )
    }
}
