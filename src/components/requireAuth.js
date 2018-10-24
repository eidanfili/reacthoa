import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){

        class Authentication extends Component {
            componentWillMount(){

            }
            componentWillUpdate(){

            }
            render() {
                return <ComposedComponent/>
            }
        
        }
    function mapStateToProps(state) {
        const { authenticated } = sate.auth;
        return { authenticated }
    }
    return connect(mapStateToProps)(Authentication)
}

