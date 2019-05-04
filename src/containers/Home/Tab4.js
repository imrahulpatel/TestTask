import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Profile from '../../assets/images/ic_profile.png';

class Tab4 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    // header: null,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(247, 248, 249)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tab4;