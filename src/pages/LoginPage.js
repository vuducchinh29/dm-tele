import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AuthHeader from '../components/loginPageComponents/AuthHeader';
import TextInputComponent from '../components/loginPageComponents/TextInputComponent';
import BigButtonComponent from '../components/loginPageComponents/BigButtonComponent';
import { theme } from '../theme';

import { API } from '../assets/constants'

class LoginPage extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  sendCode = () => {
    this.setState({
      isLoading: true
    })
    const {phone} = this.state
    API.call('auth.sendCode', {
      phone_number: phone,
      settings: {
        _: 'codeSettings',
      },
    })
    .then((res) => {
      this.setState({
        isLoading: false,
      });
      this.props.navigation.navigate('VerificationPage', {payload: {
        phone_number: this.state.phone,
        phone_code_hash: res.phone_code_hash
      }})
    })
    .catch(e => console.error('error', e))
  }

  getPhoneNumber = (value) => {
    this.setState({
      phone: value
    })
  }

  render() {
    const { isLoading } = this.state
    return (
      <View style={{ flex: 1, height: '100%' }} >
        <View style={{ flex: 2 }}>

          <AuthHeader icon='user' title="Login" />
          <TextInputComponent 
            from='login'
            title='+84' 
            placeholder='989383129'
            getPhoneNumber={(value) => this.getPhoneNumber(value)}
          />

          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SignUpPage')}
          >
            <Text
              style={{
                alignSelf: 'center',
                color: 'darkgray',
                fontSize: 14
              }}
            >Don't have an account? Sign up</Text>
          </TouchableOpacity>
          {
            isLoading && <Text 
            style={{
              color: theme.colors.primary,
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 30,
              textAlign: 'center'
            }}>Sending the code...</Text>
          }
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <BigButtonComponent
            onPress={() => this.sendCode()}
            color={theme.colors.primary} title='Log in'
          />
        </View>
      </View>
    );
  }
}

export default LoginPage;
