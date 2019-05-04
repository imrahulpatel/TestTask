import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Home from '../../assets/images/ic_home.png';
import styles from '../../styles/tab';

class Tab1 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Tab1',
    tabBarIcon: ({ tintColor }) => <Image source={Home} style={{ tintColor }} />,
    title: 'Tab1',
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
          <Text>TAB 1</Text>
      </View>
    );
  }
}

export default Tab1;