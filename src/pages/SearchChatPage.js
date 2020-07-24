import React, { Component } from 'react';
import { View } from 'react-native';
import ProfileHeader from '../components/profileComponents/ProfileHeader';
import SearchInput from '../components/common/SearchInput';
import SearchChatList from '../components/searchChatComponents/SearchChatList';
import { theme } from '../theme';

class SearchChatPage extends Component {
  // THIS OPTION IS TO SHOW/HIDE DEFAULT NAVIGATION HEADER
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ backgroundColor: theme.colors.tabPageBackground, flex: 1 }}>
        <ProfileHeader title="Select contact" onPress={() => this.props.navigation.goBack()} />
        <SearchInput />
        <SearchChatList />
      </View>
    );
  }
}

export default SearchChatPage;
