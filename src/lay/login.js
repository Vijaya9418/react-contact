import React, { Component } from 'react'
//import GoogleLogin from 'react-google-login'
import PropTypes from 'prop-types'
import { firebaseConnect } from 'react-redux-firebase'

import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'

class Login extends Component {
    loginfunc = () => {
        this.props.firebase.login({
            provider: 'google',
            type: 'popup',
            // scopes: ['email'] // not required
        })


    }
    render() {
        if (this.props.auth) {
            return (

                <div>

                    {
                        this.props.auth.displayName === undefined ? (null) : (<Redirect to='/home' />)
                    }
                    <button onClick={this.loginfunc}>Login</button>
                </div>
            )
        }
        else {
            return (
                <h1>Laoding...</h1>
            )
        }
    }
}
Login.propTypes = {
    firebase: PropTypes.object.isRequired
}
const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,

    }
}
const mapDispatchToProps = {
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firebaseConnect(),
)(Login)
/*
 {
                    this.props.auth.displayName === undefined ? (null) : (<Redirect to='/home' />)
                }
*/