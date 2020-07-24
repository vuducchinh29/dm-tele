import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SearchChatItem from './SearchChatItem';
import SearchChatAddItem from './SearchChatAddItem';

class SearchChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <SearchChatAddItem icon="user" title="New Contact" />
        <SearchChatItem
          imageSrc="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          username="Bruce Mars"
          bio="my name is someone, i work at Tatty DEV"
          isBlocked
          isMuted
        />
        <SearchChatItem
          imageSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Bayar Botany"
          bio="Founder at Tatty DEV"
        />
      </ScrollView>
    );
  }
}

export default SearchChatList;
