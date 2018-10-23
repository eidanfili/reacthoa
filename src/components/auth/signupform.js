import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textlinks';

class SignupForm extends Component {
    render() {

        const { handleSubmit } = this.props;


        return (
            <form onSubmit={ handleSubmit } className='sign-up-form'>
                <FormTitle className="sign-up-form__title" text="New User" />
                
                <Field
                    className="sign-up-form__fullname"
                    placeholder="Enter Your Full Name"
                    component={FormInput}
                    name="fullname"
                    type="text"
                    title="Full Name"
                />
                <Field
                    className="sign-up-form__unit"
                    placeholder="Enter unit #"
                    component={FormInput}
                    name="unit"
                    type="input"
                    title="Unit #"
                />


                <Field
                    className="sign-up-form__email"
                    placeholder="email"
                    component={FormInput}
                    name="email"
                    type="email"
                    title="Email"
                />
                <Field
                    className="sign-up-form__password"
                    placeholder="password"
                    name="password"
                    type="password"
                    title="password"
                    component={FormInput}
                />

                <Field
                    className="sign-up-form__create-account"
                    placeholder="Create account"
                    name="login"
                    type="submit"
                    title="Create account"
                    component={FormButton}
                />
                <div className="sign-up-form__text-links">

                    <TextLink
                        to='/signin'
                        text="Already Registered? Login"
                    />
                </div>

            </form>
        )
    }
}

SignupForm = reduxForm({
    form: 'signup'
})(SignupForm);

export default SignupForm;