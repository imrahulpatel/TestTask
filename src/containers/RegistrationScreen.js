import React from 'react'
import { View, ScrollView, TouchableOpacity, Text,TextInput } from 'react-native';
import styles from '../styles/registration';

class RegistrationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNameColor:'#FF5050',
      inputNameError: '',
      inputEmailColor:'#FF5050',
      inputEmailError: '',
      inputPasswordColor:'#FF5050',
      inputPasswordError: '',
      inputConfirmPasswordColor:'#FF5050',
      inputConfirmPasswordError: '',
      name: undefined,
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
    };
  }

  validateName(name) {
    if (!name) {
      this.setState({
        inputNameColor: '#e53935',
        inputNameError: 'Name is required',
      });
    } else {
      this.setState({
        name,
        inputNameColor:  '#FF5050',
        inputNameError: '',
      });
    }
    this.setState({ name });
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

  validateConfirmPassword(confirmPassword) {
    if (!confirmPassword) {
      this.setState({
        inputConfirmPasswordColor: '#e53935',
        inputConfirmPasswordError: 'Confirm Password is required',
      });
    } else if (this.state.password !== confirmPassword) {
      this.setState({
        inputConfirmPasswordColor: '#e53935',
        inputConfirmPasswordError: 'Confirm Password should match with Password',
      });
    }else {
      this.setState({
        confirmPassword,
        inputConfirmPasswordColor:  '#FF5050',
        inputConfirmPasswordError: '',
      });
    }
    this.setState({ confirmPassword });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.logoContainer}>
        </View>
        
          <View style={styles.bottomContainer}>
            

            <Text style={styles.loginText}>SignUp</Text>

            <View style={styles.inputeTextBox}>
              <TextInput
                label=''
                returnKeyType="next"
                style={styles.formInput}
                keyboardType="email-address"
                placeholder='Name'
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={() => this.passwordInput.focus()}
                underlineColorAndroid="transparent"
                // onChangeText={(name) => { this.setState({ name }); }}
                onChangeText={(name) => { this.validateName(name); }}
                value={this.state.name}
                tintColor='black'
              />
              <Text style={styles.helperText}>{this.state.inputNameError}</Text>

              <TextInput
                label=''
                placeholder='Email'
                returnKeyType="go"
                style={styles.formInput}
                ref={(input) => this.passwordInput = input}
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

              <TextInput
                label=''
                placeholder='Confirm Password'
                returnKeyType="go"
                secureTextEntry
                style={styles.formInput}
                ref={(input) => this.passwordInput = input}
                underlineColorAndroid="transparent"
                onChangeText={(confirmPassword) => { this.validateConfirmPassword(confirmPassword); }}
                value={this.state.cpassword}
                tintColor='black'
              />
              <Text style={styles.helperText}>{this.state.inputConfirmPasswordError}</Text>

            </View>

            <TouchableOpacity
              style={styles.btnSignInContainer}
              onPress={() => {
                if (
                  this.state.name !== undefined
                  && this.state.email !== undefined && this.state.email !== ''
                  && this.state.password !== undefined && this.state.password !== ''
                  && this.state.confirmPassword !== undefined
                  && this.state.password === this.state.confirmPassword
                ) {
                  this.props.navigation.navigate('TabScreen') 
                }
              }}
            >
              <Text style={styles.btnSigninText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => { this.props.navigation.navigate('LoginScreen') }}>
              <Text style={styles.dntAccStyle}>Already Have an account? Sign In</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>
    );
  }
}

export default RegistrationScreen