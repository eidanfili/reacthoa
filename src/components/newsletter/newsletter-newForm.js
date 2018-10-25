import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textlinks';

class NewNewsletterForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className='sign-in-form'>
                <FormTitle className="sign-in-form__title" text="login" />
                <Field
                    className="sign-in-form__email"
                    placeholder="email"
                    component={FormInput}
                    name="email"
                    type="email"
                    title="Email"
                />
                <Field
                    className="sign-in-form__password"
                    placeholder="password"
                    name="password"
                    type="password"
                    title="password"
                    component={FormInput}
                />

                <Field
                    className="sign-in-form__login"
                    placeholder="login"
                    name="login"

                    title="login"
                    component={FormButton}
                />
                <div className="sign-in-form__text-links">
                    <TextLink
                        to='/forgot'
                        text="forgot password"
                    />

                    <TextLink
                        to='/signup'
                        text="not a member? register here"
                    />
                </div>

            </form>
        )
    }
}

NewNewsletterForm = reduxForm({
    form: 'newnewsletter'
})(NewNewsletterForm);

export default NewNewsletterForm;