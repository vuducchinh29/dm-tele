import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { theme } from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    height: 50,
    backgroundColor: theme.colors.inputBackground,
    flexDirection: 'row',
    marginHorizontal: 30,
    paddingHorizontal: 10,
    marginVertical: 10
  },
  titleStyle: {
    alignSelf: 'center',
    flex: 1,
    fontWeight: '500',
    fontSize: theme.fontSize.title,
    color: theme.colors.primary
  },
  inputStyle: {

    borderLeftWidth: 4,
    borderLeftColor: theme.colors.tabPageBackground,
    backgroundColor: theme.colors.inputBackground,
    color: theme.colors.inputText,
    width: '100%',
    fontSize: 15,
    paddingLeft: 10,
    flex: 4
  },
});

class TextInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.titleStyle}>{this.props.title}</Text>
          <TextInput placeholder={this.props.placeholder} style={styles.inputStyle} />
      </View>
    );
  }
}

export default TextInputComponent;
