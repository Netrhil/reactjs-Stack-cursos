/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import Loading from './src/sections/components/loading'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor} from './src/store';
import AppNavigator from './src/app-navigator';

import AppLayout from './src/app';

type Props = {};
export default class App extends Component<Props> {
   
  render() {

    return (
      <Provider store={store}>
        <PersistGate 
          loading={<Loading/>}
          persistor={persistor}
        >
        <AppNavigator/>
        {/* <AppLayout/> */}
        </PersistGate>
      </Provider>
    );
  }
}
