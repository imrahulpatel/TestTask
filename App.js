import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import LoginScreen from './src/containers/LoginScreen';
import RegistrationScreen from './src/containers/RegistrationScreen';
import TabScreen from './src/containers/Home';

export default class App extends Component {
  render() {
    const AppNavigator = SwitchNavigator({
      LoginScreen: { screen: LoginScreen },
      RegistrationScreen: { screen: RegistrationScreen },
      TabScreen: { screen: TabScreen },
    }, {
      headerMode: 'screen',
      initialRouteName: 'LoginScreen',
    });

    return (
        <View style={{ flex: 1 }}>
            <AppNavigator />
        </View>
    );
  }
}
