/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/screens/home';
import About from './src/screens/about';
import Profile from './src/screens/profile';
import Login from './src/screens/login';


const AppNavigator = createStackNavigator(
  //
  {
    Home: {
      screen: Home,
      navigationOptions : {
        title: 'Esta es la home'
      }
    },
    About,
    Profile,
    Login
  },
  //Config
  {
    initialRouteName: 'Home',
    navigationOptions: {
      title: 'Titulo generico',
      headerTitleAllowFontScaling: true,
      headerBackTitle: 'atras',
      gesturesEnabled: true,
    },
    initialRouteKey: 'home',
    // Estos parametros se pasan a props.navigation.state.params.<param> o con navigation.getParamns()
    initialRouteParams:  { 
      nombre: 'Cosa de cosa'
    },
    //Config Visuales
    headerMode: 'screen',
    mode: 'card',
    cardStyle: {
      borderWidth: 5,
      backgroundColor: 'red'
    },
    headerTransitionPreset: 'uikit'

  }
);

const Main = createStackNavigator(
  {
    Main: {
      //Agregando otro Stack 
      screen: AppNavigator
    },
    Login: {
      screen: Login,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default createAppContainer(Main);
