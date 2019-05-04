import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import LoginScreen from './src/containers/LoginScreen';
import RegistrationScreen from './src/containers/RegistrationScreen';
// import HomeScreen from './src/containers/HomeScreen';
import TabScreen from './src/containers/Home';

export default class App extends Component {
  render() {
    const AppNavigator = SwitchNavigator({
      LoginScreen: { screen: LoginScreen },
      RegistrationScreen: { screen: RegistrationScreen },
      TabScreen: { screen: TabScreen },
    }, {
      headerMode: 'screen',
      initialRouteName: 'TabScreen',
    });

    return (
        <View style={{ flex: 1 }}>
            <AppNavigator />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
