import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import AuthHeader from '../components/loginPageComponents/AuthHeader';
import TextInputComponent from '../components/loginPageComponents/TextInputComponent';
import BigButtonComponent from '../components/loginPageComponents/BigButtonComponent';
import { theme } from '../theme';


class SignUpPage extends Component {
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

          <AuthHeader icon='user-plus' title="Sign Up" />
          <TextInputComponent title='+964' placeholder='75xxxxxx' />

          <TouchableOpacity />

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <BigButtonComponent
            onPress={() => this.props.navigation.navigate('VerificationPage')}
            color={theme.colors.primary} title='Sign Up'
          />
        </View>
      </View>
    );
  }
}

export default SignUpPage;
