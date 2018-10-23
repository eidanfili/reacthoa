import React, { Component } from 'react';
import SignupForm from './signupform';

class Signup extends Component {
    onSubmit = (fields) => {
        console.log('trying to submit', fields);
        
    }
    render() {
        return (
            <div className="sign-up">
            <SignupForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}
export default Signup;