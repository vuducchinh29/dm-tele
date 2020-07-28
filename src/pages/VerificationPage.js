import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AuthHeader from '../components/loginPageComponents/AuthHeader';
import TextInputComponent from '../components/loginPageComponents/TextInputComponent';
import BigButtonComponent from '../components/loginPageComponents/BigButtonComponent';
import { theme } from '../theme';
import Utils from '../assets/utils'
import { API } from '../assets/constants'

class VerificationPage extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    signIn = () => {
        this.setState({isLoading: true})
        const { phone_number, phone_code_hash } = this.props.navigation.getParam('payload');
        const { phone_code } = this.state
        API.call('auth.signIn', {
            phone_code: phone_code,
            phone_number: phone_number,
            phone_code_hash: phone_code_hash,
        })
        .then((res) =>{
            console.log('Signed in successfully!', res);
            Utils.saveData('user_info', res.user)
            this.setState({
                isLoading: false,
            })
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
        const { isLoading } = this.state
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
                    {
                        isLoading && <Text 
                        style={{
                        color: theme.colors.primary,
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 30,
                        textAlign: 'center'
                        }}>Verifing the code...</Text>
                    }
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
