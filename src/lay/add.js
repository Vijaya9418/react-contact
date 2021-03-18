import React, { Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import vi from './add.module.css'
class Add extends Component {
    state = {
        name: '', no: ''
    }
    onch = (e) => {
        this.setState({ [e.target.name]: [e.target.value] })
    }
    submit = (e) => {
        e.preventDefault();
        const news = {
            name: this.state.name,
            no: this.state.no
        }
        this.props.firestore.add({ collection: 'event'  }, news).then(() => alert("added"))
    }
    render() {

        return (
            <div>

                <h1>{this.state.name},{this.state.no}</h1>
                <form action="#">
                    <div className={vi.inputk}>
                        <label htmlFor="">Name :</label>
                        <input name="name" onChange={this.onch} value={this.state.name} required type="text" /></div>
                    <div className={vi.inputk}>
                        <label htmlFor="">Number :</label>
                        <input name="no" onChange={this.onch} value={this.state.no} required type="number" /></div>
                    <button onClick={this.submit} >Submit</button>
                </form>


            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        aka: state.firestore.ordered.flash,
        auth: state.firebase.auth,
    }
}
const mapDispatchToProps = {
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => [{ collection: 'flash', doc: props.auth.uid }]), firebaseConnect()
)(Add)