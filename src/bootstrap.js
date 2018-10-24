import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';

import Thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(Thunk)(compose((window.devToolsExtension ? window.devToolsExtension(): f => f)(createStore)));

import './style/main.scss';

import signin from './components/auth/signin';
import signup from './components/auth/signup';

import Layout from './components/Layout';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Layout>
          <Route path='/' exact component={signin}/>
          <Route path='/signup' exact component={signup} />
            <Route path='/signin' exact component={signin} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
