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
    const { listUsers } = this.props;
    return (
      <ScrollView>
        <SearchChatAddItem icon="user" title="New Contact" />
        {
          listUsers && listUsers.map((user, key) => (
            <SearchChatItem
              key={key}
              imageSrc="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              username={user.first_name || user.last_name}
              user_id={user.id}
              access_hash={user.access_hash}
              status={user.status._.split('Status')[1]}
              bio={user.status._.split('Status')[1]}
              isBlocked
              isMuted
            />
          ))
        }
      </ScrollView>
    );
  }
}

export default SearchChatList;
