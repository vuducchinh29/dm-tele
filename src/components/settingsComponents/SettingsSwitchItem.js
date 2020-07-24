import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 20
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  titleAndToggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  titleStyle: {
    fontSize: theme.fontSize.title,
    color: theme.colors.title
  }
});

class SettingsSwitchItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.titleAndToggleContainer}>
            <Text style={styles.titleStyle}>{this.props.title}</Text>
            <Switch value={this.state.switch} />
          </View>
          <View style={{ maxWidth: '80%' }}>
            <Text numberOfLines={3}>{this.props.subtitle}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default SettingsSwitchItem;
