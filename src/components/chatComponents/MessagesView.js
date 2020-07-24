import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ChatCard from '../chatComponents/ChatCard';
import { theme } from '../../theme';

class MessagesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [
        {
          user: 0,
          time: '12:00',
          content: 'Hey'
        },
        {
          user: 1,
          time: '12:05',
          content: "What's up?"
        },
        {
          user: 1,
          time: '12:07',
          content: 'How is it going?'
        },
        {
          user: 0,
          time: '12:09',
          content: 'things are going great'
        },
        {
          user: 0,
          time: '12:00',
          content: 'Good :)'
        },
        {
          user: 1,
          time: '12:05',
          content: 'Should we hang out tommorow? i was thinking of going somewhere which has drinks'
        },
        {
          user: 0,
          time: '12:07',
          content: 'sure!'
        },
        {
          user: 1,
          time: '12:09',
          content: 'Great'
        },
        {
          user: 0,
          time: '12:07',
          content: "7 o'clock?"
        },
        {
          user: 1,
          time: '12:09',
          content: 'sounds Good'
        }
      ]
    };
  }
  /* To define Which User is Me
  0 = ME
  1 = other Person */
  myUser = 0;

  /* A function that turns The messages Array into Objects and then returns each object */
  showChats() {
    return this.state.chats.map(chat => (
      <ChatCard time={chat.time} isLeft={chat.user !== this.myUser} chat={chat.content} />
    ));
  }

  render() {
    return (
      /* SCROLLABLE VIEW Container: Contains ALl the ConversationItems(Users you talk to) */
      <ScrollView
        style={{ backgroundColor: theme.colors.tabPageBackground }}
        ref={ref => (this.scrollView = ref)}
        onContentSizeChange={() => {
          this.scrollView.scrollToEnd({ animated: true });
        }}
      >
        {this.showChats()}
      </ScrollView>
    );
  }
}

export default MessagesView;
