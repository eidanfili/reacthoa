import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormTitle } from '../formTitle';
import SigninForm from './signin-form';


import * as actions from '../../actions';

class Signin extends Component {

    onSubmit = (fields) => {
        this.props.signIn(fields, () => {
            this.props.history.push('/dashboard');
        })
    }


    render() {
        return(
            <div className="sign-in">
                
                <SigninForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}
export default connect(null, actions)(Signin);