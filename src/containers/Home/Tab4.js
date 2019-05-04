import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Profile from '../../assets/images/ic_profile.png';
import styles from '../../styles/tab';

class Tab4 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Tab4',
    tabBarIcon: ({ tintColor }) => <Image source={Profile} style={{ tintColor }} />,
    title: 'Tab4',
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
          <Text>TAB 4</Text>
      </View>
    );
  }
}

export default Tab4;