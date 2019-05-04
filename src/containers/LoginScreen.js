import React from 'react'
import { View, StyleSheet,ScrollView, TouchableOpacity, Text, TextInput } from 'react-native';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: '',
      // password: '',
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
            {/* <Text style={styles.subLoginText}>Login to your account</Text> */}

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
                // onChangeText={(email) => { this.setState({ email }); }}
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
                // onChangeText={(password) => { this.setState({ password });  }}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(247, 248, 249)',
  },
  closeImg: {
    width: 15,
    height: 15,
  },
  signImg: {
    fontStyle: 'normal',
    lineHeight:20,
    letterSpacing:0.9,
    fontSize:19,
    color:'#FF5050'
  },
  contentContainer: {
    height: '100%',
  },
  logoContainer: {
    paddingVertical: 30,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  logoStyle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
  },
  bottomContainer: {
    paddingLeft: 25,
    paddingRight: 25,
    marginTop:-5,
    backgroundColor: 'rgb(247, 248, 249)',
  },
  loginText: {
    color: '#141414',
    fontSize: 26,
    fontStyle: 'normal',  
    letterSpacing:0.1,
    lineHeight:40,
    alignSelf: 'center',
  },
  subLoginText: {
    color: '#979797',
    fontSize: 15,
    fontStyle: 'normal',  
    lineHeight:20,
    letterSpacing:0.1,
    marginTop:5,
    alignSelf: 'center',
  },
  inputeTextBox: {
    paddingVertical: 10,
  },
  formInput: {
    fontSize: 16,
    height: 55,
    paddingVertical: 10,
    padding: 15,
    borderColor: 'rgb(226, 229, 241)',
    borderWidth: 2,
    marginTop: 20,
    borderRadius: 4,
    backgroundColor: 'white',
    color:"#868686",
    lineHeight:19,
    letterSpacing:0.9,
  },
  btnSignInContainer: {
    width: '100%',
    backgroundColor: 'white',
    height: 55,
    borderColor: '#FF5050',
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  btnSigninText: {
    textAlign: 'center',
    color: '#FF5050',
    fontSize: 19,
    lineHeight:20,
    letterSpacing:0.9,
  },
  dntAccContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dntAccStyle: {
    textAlign: 'center',
    color: '#A4A4BD',
    marginTop: 30,
    fontSize: 16,
    lineHeight:20,
    letterSpacing:-0.1,
  },
  signUpText: {
    color: '#FF5050',
    fontSize:17,
    lineHeight:19,
    letterSpacing:0.9,
  },
  helperText: {
    color: '#e53935',
    marginLeft: 10,
    marginRight: 10,
    // fontFamily: 'Roboto',
  },
});

export default LoginScreen;