import React, { Component } from 'react';
import { View } from 'react-native';
import ProfileHeader from '../components/profileComponents/ProfileHeader';
import SearchInput from '../components/common/SearchInput';
import SearchChatList from '../components/searchChatComponents/SearchChatList';
import { theme } from '../theme';

import { API } from '../assets/constants'
import Utils from '../assets/utils'
class SearchChatPage extends Component {
  // THIS OPTION IS TO SHOW/HIDE DEFAULT NAVIGATION HEADER
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      listUsers: [],
      searchText: ''
    };
  }

  componentDidMount = async () => {
    const user_info_str = await Utils.getData('user_info')
    const user_info = JSON.parse(user_info_str)
    API.call('contacts.getContacts', {
      hash: user_info.access_hash
    })
    .then((response) => {
      this.setState({
        listUsers: response.users
      })
    })
    .catch((err) => console.error(err));
  };

  searchContact = (data) => {
    this.setState({
      searchText: data
    })
  }

  render() {
    const {listUsers, searchText } = this.state;
    const showListUsers = listUsers.filter((user) => { 
        const name = user.first_name || user.last_name
        return name.toLowerCase().includes(searchText.toLowerCase())})
    return (
      <View style={{ backgroundColor: theme.colors.tabPageBackground, flex: 1 }}>
        <ProfileHeader title="Select contact" onPress={() => this.props.navigation.goBack()} />
        <SearchInput 
          from='contact'
          searchContact = {(data) => this.searchContact(data)}
        />
        <SearchChatList 
          listUsers = {showListUsers}
        />
      </View>
    );
  }
}

export default SearchChatPage;
