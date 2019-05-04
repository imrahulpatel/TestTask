import React from 'react'
import { View, ScrollView, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from '../styles/login';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmailColor: '#FF5050',
      inputEmailError: '',
      inputPasswordColor: '#FF5050',
      inputPasswordError: '',
      email: undefined,
      password: undefined,
    };
  }

  validateEmail(email) {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)) {
      this.setState({
        inputEmailColor: '#e53935',
        inputEmailError: 'Please enter a valid email address.',
      });
    } else {
      this.setState({
        email,
        inputEmailColor: '#FF5050',
        inputEmailError: '',
        errorMessage: '',
      });
    }
    this.setState({ email });
  }

  validatePassword(password) {
    if (!password) {
      this.setState({
        inputPasswordColor: '#e53935',
        inputPasswordError: 'Password is required',
      });
    } else {
      this.setState({
        password,
        inputPasswordColor:  '#FF5050',
        inputPasswordError: '',
      });
    }
    this.setState({ password });
  }

  render() { 
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.logoContainer}>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.loginText}>Login</Text>

            <View style={styles.inputeTextBox}>
              <TextInput
                label=''
                returnKeyType="next"
                style={styles.formInput}
                keyboardType="email-address"
                placeholder='Email'
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={() => this.passwordInput.focus()}
                underlineColorAndroid="transparent"
                onChangeText={(email) => { this.validateEmail(email); }}
                value={this.state.email}
                tintColor='black'
              />
              <Text style={styles.helperText}>{this.state.inputEmailError}</Text>

              <TextInput
                label=''
                placeholder='Password'
                returnKeyType="go"
                secureTextEntry
                style={styles.formInput}
                ref={(input) => this.passwordInput = input}
                underlineColorAndroid="transparent"
                onChangeText={(password) => { this.validatePassword(password); }}
                value={this.state.password}
                tintColor='black'
              />
              <Text style={styles.helperText}>{this.state.inputPasswordError}</Text>
            </View>

            <TouchableOpacity
              style={styles.btnSignInContainer}
              onPress={() => {
                if (this.state.email !== undefined && this.state.email !== '' && this.state.password !== undefined && this.state.password !== '') {
                  this.props.navigation.navigate('TabScreen') 
                }
              }}
            >
              <Text style={styles.btnSigninText}>Login</Text>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('RegistrationScreen') }}>
              <Text style={styles.dntAccStyle}>Do not have an account? Sign Up</Text> 
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default LoginScreen;