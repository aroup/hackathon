import React from 'react';
import App from './App';
import { Router, Route,browserHistory } from 'react-router';
import Greeting from './Greeting';
import SignUpPage from './signUp/SignUpPage';
import AboutPage from './about/AboutPage';
import SignInPage from './signin/SignInPage';

import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import initialState from '../reducers/initialState';
const store = configureStore(initialState);

const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path="/home" component={Greeting}/>
        <Route path="/signup" component={SignUpPage}/>
        <Route path="/About" component={AboutPage}/>
        <Route path="/signin" component={SignInPage}/>
      </Route>
    </Router>
  </Provider>
);

export default routes;
