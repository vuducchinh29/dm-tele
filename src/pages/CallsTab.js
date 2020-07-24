import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Calls from '../components/callTabComponents/Calls';
import { theme } from '../theme';
/* STYLESHEET */
const styles = StyleSheet.create({
  /* FLOATING ACTION BUTTON Style */
  fabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: theme.colors.tabBackground,
    borderRadius: 100,
    elevation: 5,
    shadowColor: theme.colors.secondary,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 }
  }
});
class CallsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ backgroundColor: theme.colors.tabPageBackground, flex: 1 }}>
        <ScrollView>
          <Calls />
        </ScrollView>
        {/* FLOATING ACTION BUTTON */}
        <TouchableOpacity style={styles.fabStyle}>
          <Icon name="phone" size={25} color={theme.colors.secondary} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default CallsTab;
