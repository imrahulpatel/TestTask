import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Reminder from '../../assets/images/ic_reminder.png';
import styles from '../../styles/tab';

class Tab2 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Tab2',
    tabBarIcon: ({ tintColor }) => <Image source={Reminder} style={{ tintColor }} />,
    title: 'Tab2',
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
          <Text>TAB 2</Text>
      </View>
    );
  }
}

export default Tab2;