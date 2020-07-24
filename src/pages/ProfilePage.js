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

class ProfilePage extends Component {
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
    return (
      <View style={mainContainer}>
        <ProfileHeader onPress={() => this.props.navigation.goBack()} title="Profile" />
        <ScrollView>
          <ProfileInfo
            myProfile
            username="Bayar Botany"
            bio="front-end dev working at Tatty, studying 12th Grade,
          i like to read books and stuff,
          Eminem is my idol i like to read books and stuff,
          Eminem is my idol"
            profilePicture="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <SettingsCard
            onPress={() =>
              this.props.navigation.navigate('SettingsPage', {
                title: 'Account'
              })
            }
            title="Account"
            icon="key"
          />
          <SettingsCard
            onPress={() =>
              this.props.navigation.navigate('SettingsPage', {
                title: 'Chats'
              })
            }
            title="Chats"
            icon="align-left"
          />
          <SettingsCard
            onPress={() =>
              this.props.navigation.navigate('SettingsPage', {
                title: 'Notifications'
              })
            }
            title="Notifications"
            icon="bell"
          />
          <SettingsCard onPress={() => null} title="Help" icon="info-circle" />

          <SettingsCard
            onPress={() =>
              this.props.navigation.navigate('LoginPage', {
                title: 'LoginPage'
              })
            }
            title="Login"
            icon="align-left"
          />
        </ScrollView>
      </View>
    );
  }
}

export default ProfilePage;
