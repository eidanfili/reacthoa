import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'

import SignupForm from './signupform';

class Signup extends Component {
    onSubmit = (fields) => {
        this.props.signUp(fields, () => {
            console.log('nav to page');
            this.props.history.push('/dashboard')
        })
        
    }
    render() {
        return (
            <div className="sign-up">
            <SignupForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}
export default connect(null, actions)(Signup);