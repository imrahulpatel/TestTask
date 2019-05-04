import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import DiveThru from '../../assets/images/ic_divethru.png';
import styles from '../../styles/tab';

class Tab3 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Tab3',
    tabBarIcon: ({ tintColor }) => <Image source={DiveThru} style={{ tintColor }} />,
    title: 'Tab3',
    headerTitleStyle: {
      alignSelf: 'center',
      color: 'black',
      fontSize: 16,
    },
    headerStyle: {
      backgroundColor: 'white',
    },
    headerRight: (
      <TouchableOpacity activeOpacity={0.5} onPress={() =>  navigation.navigate('LoginScreen')}>
        <Text style={{ margin: 10 }} >
        Logout
        </Text>
      </TouchableOpacity>
    ),
  });

  render() { 
    return (
      <View style={styles.container}>
          <Text>TAB 3</Text>
      </View>
    );
  }
}

export default Tab3;