import React, { Component } from 'react';
import { FormTitle } from '../formTitle';
import SigninForm from './signin-form';

class Signin extends Component {
    render() {
        return(
            <div className="sign-in">
                
                <SigninForm />
            </div>
        )
    }
}
export default Signin;