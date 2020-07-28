import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SearchChatItem from './SearchChatItem';
import SearchChatAddItem from './SearchChatAddItem';

import { API } from '../../assets/constants'
import Utils from '../../assets/utils'
class SearchChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = async () => {
    const user_info_str = await Utils.getData('user_info')
    const user_info = JSON.parse(user_info_str)
    API.call('contacts.getContacts', {
      hash: user_info.access_hash
    })
    .then((response) => {
      console.log(response);
      this.setState({
        listUsers: response.users
      })
    })
    .catch((err) => console.error(err));
  };
  

  render() {
    const { listUsers } = this.state;
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
              bio="my name is someone, i work at Tatty DEV"
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
