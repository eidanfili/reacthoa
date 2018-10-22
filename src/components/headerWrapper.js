import React, { Component } from 'react';
import Signin from './auth/signin';

class HeaderWrapper extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <h1 className="header-wrapper__title">Welcome</h1>
                <p className="header-wrapper__subtitle">login to continue</p>
                {this.props.children}
            </div>
        )
    }
}
export default HeaderWrapper;