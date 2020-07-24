import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileHeader from '../components/profileComponents/ProfileHeader';
import { theme } from '../theme';
import SettingsSwitchItem from '../components/settingsComponents/SettingsSwitchItem';
import SettingsPopupItem from '../components/settingsComponents/SettingsPopupItem';
/* STYLES: you can change Colors, Sizes, Shapes, ETC */
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.tabBackground,
    width: '100%',
    flexDirection: 'column',
    flex: 1
  },
  titleContainer: {
    alignItems: 'center'
  },
  titleStyle: {
    color: theme.colors.title,
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonContainer: {
    width: 40,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
class SettingsPage extends Component {
  // THIS OPTION IS TO SHOW/HIDE DEFAULT NAVIGATION HEADER
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { mainContainer } = styles;
    const title = this.props.navigation.getParam('title', 'Settings');
    return (
      <View style={mainContainer}>
        <ProfileHeader title={title} onPress={() => this.props.navigation.goBack()} />
        <ScrollView style={{ flex: 1, paddingTop: 10 }}>
          <SettingsSwitchItem
            title="Use custom Names"
            subtitle="Use nicknames instead of real name"
          />
          <SettingsSwitchItem title="Media visibility" subtitle="download media automatically" />
          <SettingsPopupItem title="Font size" subtitle="Large" />
          <SettingsPopupItem title="Language" subtitle="English" />
        </ScrollView>
      </View>
    );
  }
}

export default SettingsPage;
