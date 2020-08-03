import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import ChatHeader from '../components/chatComponents/ChatHeader';
import ChatInput from '../components/chatComponents/ChatInput';
import MessagesView from '../components/chatComponents/MessagesView';
import { theme } from '../theme';

import { API } from '../assets/constants'
import Utils from '../assets/utils'

class ChatPage extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount = () => {
    const { navigation } = this.props;
    const username = navigation.getParam('username', 'no name available');
    const user_id = navigation.getParam('user_id', 'no id available');
    const access_hash = navigation.getParam('access_hash', 'no id available');
    API.call('messages.createChat', {
      users: [{
        _: 'inputUser',
        user_id: user_id,
        access_hash: access_hash
      }],
      title: username
    })
    .then ((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err))
  };
  

  render() {
    const { navigation } = this.props;
    const username = navigation.getParam('username', 'no name available');
    const user_id = navigation.getParam('user_id', 'no id available');
    const status = navigation.getParam('status', 'no id available');
    const bio = navigation.getParam('bio', 'No Bio Available');
    const imageSrc = navigation.getParam('imageSrc', null);
    const isBlocked = navigation.getParam('isBlocked', false);
    const isMuted = navigation.getParam('isMuted', false);
    return (
      <View style={{ flex: 1 }}>
        {/* The Color of Status Bar (battery level, notifcitaion bar, and wifi stats) */}
        <StatusBar barStyle="dark-content" backgroundColor={theme.colors.tabPageBackground} />
        {/* CHAT_HEADER Component (PICTURE, ONLINE_STATUS, CALL, ATTACHMENTS, OPTIONS BUTTON) */}
        <ChatHeader
          onOpenProfile={() =>
            this.props.navigation.navigate('FriendsProfilePage', {
              username,
              user_id,
              status,
              bio,
              imageSrc,
              isBlocked,
              isMuted
            })
          }
          onPress={() => this.props.navigation.goBack()}
          username={username}
          imageSrc={imageSrc}
          onlineStatus={status}
        />
        {/* Messages_AREA component where u get all the messages */}
        <MessagesView />
        {/* CHAT_INPUT component which includes Typing, Microphone and send Button */}
        <ChatInput />
      </View>
    );
  }
}

export default ChatPage;
