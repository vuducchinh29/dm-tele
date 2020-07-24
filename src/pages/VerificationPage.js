import React, { Component } from 'react';
import { View } from 'react-native';
import AuthHeader from '../components/loginPageComponents/AuthHeader';
import TextInputComponent from '../components/loginPageComponents/TextInputComponent';
import BigButtonComponent from '../components/loginPageComponents/BigButtonComponent';
import { theme } from '../theme';

import { MTProto } from '@mtproto/core'
const api_id = '1419179';
const api_hash = '0fbc49808dfa383bd1a3b381493ef836';
const mtproto = new MTProto({
  api_id,
  api_hash,
  test: true,
});
class VerificationPage extends Component {
    // THIS OPTION IS TO SHOW/HIDE DEFAULT NAVIGATION HEADER
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    signIn = () => {
        const { phone_number, phone_code_hash } = this.props.navigation.getParam('payload');
        const { phone_code } = this.state
        console.log(phone_code, phone_number, phone_code_hash);
        
        mtproto.call('auth.signIn', {
            phone_code: phone_code,
            phone_number: phone_number,
            phone_code_hash: phone_code_hash,
        })
        .then((res) =>{
            console.log(res);
            this.props.navigation.navigate('Home')
        })
        .catch((err) =>{
            console.error(err);
        })
    }

    getPhoneCode = (value) => {
        this.setState({
            phone_code: value
        })
    }

    render() {
        return (
            <View style={{ flex: 1, height: '100%' }} >
                <View style={{ flex: 2 }}>
                    <AuthHeader icon='check' title="Verification" />
                    <TextInputComponent 
                        from='verify'
                        title='Code' 
                        placeholder='12345'
                        getPhoneCode={(value) => this.getPhoneCode(value)}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <BigButtonComponent
                        onPress={() => this.signIn()}
                        color={theme.colors.primary} title='Verify'
                    />
                </View>
            </View>
        );
    }
}

export default VerificationPage;
