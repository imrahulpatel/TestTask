import { StyleSheet } from 'react-native';

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
      },
});

export default styles;
