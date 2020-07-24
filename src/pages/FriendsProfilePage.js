import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileHeader from '../components/profileComponents/ProfileHeader';
import ProfileInfo from '../components/profileComponents/ProfileInfo';
import SettingsCard from '../components/profileComponents/SettingsCard';
import { theme } from '../theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: theme.colors.tabPageBackground
  }
});

class FriendsProfilePage extends Component {
  // THIS OPTION IS TO SHOW/HIDE DEFAULT NAVIGATION HEADER
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);

    const { navigation } = props;
    const isBlocked = navigation.getParam('isBlocked', false);
    const isMuted = navigation.getParam('isMuted', false);
    this.state = {
      isBlocked,
      isMuted
    };
  }

  /* FUNCTION: Shows BlockButton
  - tap on it to Block/Unblock the target */
  showBlockButton() {
    /* CHECKS if isBlocked is true 
    -shows Unblock Button
    -sets the state isBlocked to false */
    if (this.state.isBlocked) {
      return (
        <SettingsCard
          onPress={() => this.setState({ isBlocked: false })}
          title="Unblock"
          icon="circle"
          color={theme.colors.danger}
        />
      );
    }
    /* CHECKS if isBlocked is false 
    -shows Block Button
    -sets the state isBlocked to true */
    return (
      <SettingsCard onPress={() => this.setState({ isBlocked: true })} title="Block" icon="ban" />
    );
  }

  /* FUNCTION: Shows MuteButton
  - tap on it to Mute/Unmute the target */
  showMuteButton() {
    /* CHECKS if isMuted is true 
    -shows unMute Button
    -sets the state isMuted to false */
    if (this.state.isMuted) {
      return (
        <SettingsCard
          onPress={() => this.setState({ isMuted: false })}
          title="Unmute"
          icon="volume-up"
          color={theme.colors.danger}
        />
      );
    }

    /* CHECKS if isMuted is false 
    -shows Mute Button
    -sets the state isMuted to true */
    return (
      <SettingsCard
        onPress={() => this.setState({ isMuted: true })}
        title="Mute"
        icon="volume-off"
      />
    );
  }

  render() {
    const { mainContainer } = styles;
    const { navigation } = this.props;
    const username = navigation.getParam('username', 'no name available');
    const bio = navigation.getParam('bio', 'No Bio Available');
    const imageSrc = navigation.getParam('imageSrc', null);
    const isBlocked = navigation.getParam('isBlocked', false);
    const isMuted = navigation.getParam('isMuted', false);
    return (
      <View style={mainContainer}>
        <ProfileHeader onPress={() => navigation.goBack()} title="User" />
        <ScrollView>
          <ProfileInfo username={username} bio={bio} profilePicture={imageSrc} />
          <SettingsCard
            onPress={() => {
              this.props.navigation.navigate('OnCallPage', {
                username,
                imageSrc
              });
            }}
            title="Call"
            icon="phone"
          />
          <SettingsCard
            onPress={() => {
              this.props.navigation.navigate('MessagePage', {
                username,
                bio,
                imageSrc,
                isBlocked,
                isMuted
              });
            }}
            title="Message"
            icon="align-left"
          />
          {this.showBlockButton()}
          {this.showMuteButton()}
        </ScrollView>
      </View>
    );
  }
}

export default FriendsProfilePage;
