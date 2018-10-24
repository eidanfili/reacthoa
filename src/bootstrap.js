import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';

import reducers from './reducers';

import Thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(Thunk)(compose((window.devToolsExtension ? window.devToolsExtension(): f => f)(createStore)));

import './style/main.scss';

import Layout from './components/Layout';

//auth
import signin from './components/auth/signin';
import signup from './components/auth/signup';
import history from './history';
import requireAuth from './components/requireAuth';

//dashboad
import Dashboard from './components/dashboard';




function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Layout>
          <Route path='/' exact component={signin}/>
          <Route path='/signup' exact component={signup} />
          <Route path='/signin' exact component={signin} />
          <Route path='/Dashboard' exact component={requireAuth(Dashboard)} />
          </Layout>
        </Switch>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
