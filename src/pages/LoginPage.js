import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AuthHeader from '../components/loginPageComponents/AuthHeader';
import TextInputComponent from '../components/loginPageComponents/TextInputComponent';
import BigButtonComponent from '../components/loginPageComponents/BigButtonComponent';
import { theme } from '../theme';


class LoginPage extends Component {
  // THIS OPTION IS TO SHOW/HIDE DEFAULT NAVIGATION HEADER
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, height: '100%' }} >
        <View style={{ flex: 2 }}>

          <AuthHeader icon='user' title="Login" />
          <TextInputComponent title='+964' placeholder='75xxxxxx' />

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

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <BigButtonComponent
            onPress={() => this.props.navigation.navigate('VerificationPage')}
            color={theme.colors.primary} title='Log in'
          />
        </View>
      </View>
    );
  }
}

export default LoginPage;
