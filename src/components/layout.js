import React, { Component } from 'react';
import { HeaderBar, Header } from './header';


class Layout extends Component {
    render() {
        return (
            <div className="layout-grid">
                <Header/>
                <HeaderBar/>
                {this.props.children}
            </div>
        )
    }
}
export default Layout;