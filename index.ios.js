/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { applyMiddleware, combineReduxers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import configureStore from './app/store/configureStore'
const store = configureStore()

import NavigationRootContainer from './app/containers/navRootContainer'

import {
  AppRegistry
} from 'react-native';

export default class BBWallet extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationRootContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('BBWallet', () => BBWallet);
