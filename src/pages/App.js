import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
  SafeAreaView
} from 'react-navigation';
import ChatPage from './ChatPage';
import ProfilePage from './ProfilePage';
import FriendsProfilePage from './FriendsProfilePage';
import CallsTab from './CallsTab';
import StoriesTab from './StoriesTab';
import Header from '../components/common/Header';
import SettingsPage from './SettingsPage';
import OnCallPage from './OnCallPage';
import { theme } from '../theme';
import ConversationsTab from './ConversationsTab';
import SearchChatPage from './SearchChatPage';
import StoryView from './StoryView';
import LoginPage from './LoginPage';
import VerificationPage from './VerificationPage';
import SignUpPage from './SignUpPage';

// NAVIGATOR FUNCTION
const ChatPageNavigator = createStackNavigator(
  {
    Home: createMaterialTopTabNavigator(
      {
        Calls: CallsTab,
        Chats: ConversationsTab,
        Stories: StoriesTab
      },
      {
        initialRouteName: 'Chats',
        tabBarOptions: {
          activeTintColor: theme.colors.activeTabTitle,
          inactiveTintColor: theme.colors.inactiveTabTitle,
          tabStyle: {
            backgroundColor: 'transparent'
          },
          labelStyle: {
            fontWeight: 'bold'
          },
          indicatorStyle: {
            backgroundColor: theme.colors.tabIndicator
          },
          style: {
            backgroundColor: theme.colors.tabBackground
          }
        },
        navigationOptions: {
          /* HEADER Component
        The onPress function is to
        navigate to ProfilePage when you click on the profile picture */
          header: <Header title="BlueChat" />
        }
      }
    ),
    MessagePage: ChatPage,
    ProfilePage,
    FriendsProfilePage,
    SettingsPage,
    OnCallPage,
    SearchChatPage,
    StoryView,
    LoginPage,
    VerificationPage,
    SignUpPage
    
  },
  {
    //THE DEFAULT PAGE WHEN APP STARTS
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(ChatPageNavigator);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}
