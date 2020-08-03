import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ChatCard from '../chatComponents/ChatCard';
import { theme } from '../../theme';
import { API } from '../../assets/constants'
import Utils from '../../assets/utils'
import moment from 'moment';

class MessagesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount = async () => {
    const user_info = await Utils.getData('user_info')
    this.myId = JSON.parse(user_info).id
    this.loadMessagesHistory(20)
  };

  loadMessagesHistory = (limit) => {
    const { chat_info, user_id, access_hash } = this.props;
    const msg_id = chat_info.updates[0].id
    API.call('messages.getHistory', {
      peer: {
        _: 'inputPeerUser',
        user_id: user_id,
        access_hash: access_hash
      },
      offset_id: msg_id, 
      add_offset: 0, 
      limit: limit
    })
    .then ((res) => {
      console.log(res);
      this.setState({
        messages: res.messages
      })
    })
    .catch((err) => console.error(err))
  }
  renderMessages() {
    return this.state.messages.reverse().map((message, index) => (
      <ChatCard key={index} time={moment.unix(message.date).format('HH:mm')} isLeft={message.from_id !== this.myId} chat={message.message} />
  ))
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
        {this.renderMessages()}
      </ScrollView>
    );
  }
}

export default MessagesView;
