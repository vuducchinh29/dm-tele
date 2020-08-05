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
import InitPage from './InitPage';

import { API } from '../assets/constants';

// NAVIGATOR FUNCTION

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: 'init'
    }
  }
  
  componentDidMount = () => {
    API.call('updates.getState', {})
    .then((state) => {
      console.log('state', state)
      this.setState({
        appState: 'home'
      })
    })
    .catch((err) => {
      console.log('error', err)
      if (err.error_message === "AUTH_KEY_UNREGISTERED") {
        this.setState({
          appState: 'login'
        })
      }
    })
  };
  
  
  render() {
    const { appState } = this.state
    let defaultState
    switch (appState) {
      case 'login':
        defaultState = 'LoginPage'
        break;
      case 'home':
        defaultState = 'Home'
        break;
      default:
        defaultState = 'InitPage'
        break;
    }
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
              header: <Header title="Private Chat" />
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
        SignUpPage,
        InitPage
      },
      {
        //THE DEFAULT PAGE WHEN APP STARTS
        initialRouteName: defaultState
      }
    );
    const AppContainer = createAppContainer(ChatPageNavigator);
    return (
      <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}
