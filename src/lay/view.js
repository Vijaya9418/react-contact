import React, { Component } from 'react'

import astyle from './view.module.css'

import { firestoreConnect } from 'react-redux-firebase'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'

class View extends Component {
    state = {
        contacts: [{ name: 'vijay', no: '234234' }, { name: 'vijaya', no: '345234' }]
    }
    render() {

        if (this.props.aka) {
            if (this.props.aka[0]) {
                return (
                    <div>

                        <h1 className={astyle.allcon}>All contacts</h1>
                        {this.props.aka[0].contacts.map(i => <span className={astyle.con}>
                            <div className={astyle.name}>{i.name}</div><div className={astyle.no}>{i.no}</div>
                        </span>)}
                    </div>
                )
            }
            else {
                return (<h1 className={astyle.allcon}>All contacts</h1>)
            }

        }
        else {
            return (<h1>Loading....</h1>)
        }
    }
}



const mapStateToProps = state => {
    return {
        aka: state.firestore.ordered.event,
        auth: state.firebase.auth,
    }
}
const mapDispatchToProps = {
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => [{ collection: 'event', doc: props.auth.uid }]), firebaseConnect()
)(View)