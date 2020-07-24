import React, { Component } from 'react';
import { View } from 'react-native';
import AuthHeader from '../components/loginPageComponents/AuthHeader';
import TextInputComponent from '../components/loginPageComponents/TextInputComponent';
import BigButtonComponent from '../components/loginPageComponents/BigButtonComponent';
import { theme } from '../theme';


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

    render() {
        return (
            <View style={{ flex: 1, height: '100%' }} >
                <View style={{ flex: 2 }}>

                    <AuthHeader icon='check' title="Verification" />
                    <TextInputComponent title='Code' placeholder='12345' />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <BigButtonComponent
                        onPress={() => this.props.navigation.navigate('Home')}
                        color={theme.colors.primary} title='Verify'
                    />
                </View>
            </View>
        );
    }
}

export default VerificationPage;
