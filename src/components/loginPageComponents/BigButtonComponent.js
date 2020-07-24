import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';

class BigButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity
            onPress={() => this.props.onPress()}
                style={{
                    backgroundColor: theme.colors.searchBackground,
                    height: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                }}
            >
                <Text
                    style={{
                        color: this.props.color,
                        fontWeight: 'bold',
                        fontSize: 20
                    }}
                > {this.props.title} </Text>
            </TouchableOpacity>
        );
    }
}

export default BigButtonComponent;
