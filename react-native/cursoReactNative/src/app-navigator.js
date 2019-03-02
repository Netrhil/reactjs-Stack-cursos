import React, {Component} from 'react';
import { Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Loading from '../src/sections/components/loading'

const Main = createStackNavigator(
    {
        Home: Loading
    }
);

export default createAppContainer(Main);

