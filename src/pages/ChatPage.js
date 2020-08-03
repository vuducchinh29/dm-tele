import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import ChatHeader from '../components/chatComponents/ChatHeader';
import ChatInput from '../components/chatComponents/ChatInput';
import MessagesView from '../components/chatComponents/MessagesView';
import { theme } from '../theme';

import { API } from '../assets/constants'

class ChatPage extends Component {
  state = {
    chat_info: null
  }

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
      this.setState({
        chat_info: res
      })
    })
    .catch((err) => console.error(err))
  };
  

  render() {
    const { navigation } = this.props;
    const username = navigation.getParam('username', 'no name available');
    const user_id = navigation.getParam('user_id', 'no id available');
    const access_hash = navigation.getParam('access_hash', 'no id available');
    const status = navigation.getParam('status', 'no id available');
    const bio = navigation.getParam('bio', 'No Bio Available');
    const imageSrc = navigation.getParam('imageSrc', null);
    const isBlocked = navigation.getParam('isBlocked', false);
    const isMuted = navigation.getParam('isMuted', false);
    const {chat_info} = this.state
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor={theme.colors.tabPageBackground} />
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
        {chat_info && 
        <MessagesView 
          chat_info={chat_info}
          username={username}
          user_id={user_id}
          access_hash={access_hash}
        />}
        <ChatInput />
      </View>
    );
  }
}

export default ChatPage;
