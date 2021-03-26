import React, { Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import vi from './add.module.css'
import Nav from './nav'
class Add extends Component {
    state = {
        name: '', no: ''
    }
    onch = (e) => {
        this.setState({ [e.target.name]: [e.target.value] })
    }
    submit = (e) => {
        e.preventDefault();
        if (this.state.name !== "") {
            if (this.state.no.match(/^\d{10}$/)) {
                const { firestore } = this.props;
                console.log('working')
                if (this.props.aka[0]) {
                    console.log('workingnothing')
                    var news;
                    if (this.props.aka[0].contacts) {
                        news = {
                            'contacts': [{
                                name: this.state.name,
                                no: this.state.no
                            }, ...this.props.aka[0].contacts]
                        }
                    }
                    else {
                        news = {
                            'contacts': [{
                                name: this.state.name,
                                no: this.state.no
                            }]
                        }
                    }
                    firestore.update({ collection: 'event', doc: this.props.auth.uid }, news).then(() =>
                        alert('Added')

                    )
                    this.setState({ name: '', holder: new Date(), no: '' })
                }
                else {
                    news = {
                        'contacts': [{
                            name: this.state.name,
                            no: this.state.no
                        }]
                    }
                    firestore.set({ collection: 'event', doc: this.props.auth.uid }, news).then(() =>
                        alert('Added')

                    )
                }

            }
            else {
                alert("Number should be 10 digits");
            }
        }
        else {
            alert("name can't be empty");
        }

    }
    render() {

        return (
            <div className={vi.hole}>
                <Nav />
                <h1>{this.state.name},{this.state.no}</h1>
                <form action="#">
                    <div className={vi.inputkk}>
                    <div className={vi.inputk}>
                        <label htmlFor="">Name :</label>
                        <input name="name" onChange={this.onch} value={this.state.name} required type="text" /></div>
                    <div className={vi.inputk}>
                        <label htmlFor="">Number :</label>
                        <input name="no" onChange={this.onch} value={this.state.no} required type="number" /></div>
                        </div>

                      
                    <button className={vi.bot} onClick={this.submit} >Submit</button>
                </form>


            </div>
        )
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
)(Add)