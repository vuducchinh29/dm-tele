import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BigImageComponent from './BigImageComponent';
import { theme } from '../../theme';

export default class AuthHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View
        style={{
          paddingVertical: 50,
          backgroundColor: theme.colors.primary,
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <BigImageComponent
          icon={this.props.icon} size={150} color={theme.colors.tabBackground}
        />
        <Text
          style={{
            color: theme.colors.tabBackground,
            fontSize: 24,
            fontWeight: 'bold',
            alignSelf: 'center'
          }}
        > {this.props.title} </Text>
        
      </View>
    );
  }
}
