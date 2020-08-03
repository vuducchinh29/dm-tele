import React, { Component } from 'react';
import { View, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Conversations from '../components/Conversations';
import SearchInput from '../components/common/SearchInput';
import { theme } from '../theme';

/* STYLESHEET */
const styles = StyleSheet.create({
  /* FLOATING ACTION BUTTON Style */
  fabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: theme.colors.tabBackground,
    borderRadius: 100,
    elevation: 5,
    shadowColor: theme.colors.secondary,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 }
  }
});

class ConversationsTab extends Component {
  // THIS OPTION IS TO SHOW/HIDE DEFAULT NAVIGATION HEADER
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  searchConversation = (value) => {
    this.setState({
      searchText: value
    })
  }

  render() {
    return (
      <View style={{ backgroundColor: theme.colors.tabPageBackground, flex: 1 }}>
        {/* The Color of Status Bar (battery level, notifcitaion bar, and wifi stats) */}
        <StatusBar backgroundColor={theme.colors.tabPageBackground} barStyle="dark-content" />
        {/* CONVERSATIONS Component */}
        <Conversations searchText={this.state.searchText}>
          {/* SEARCH_INPUT Component */}
          <SearchInput 
            searchConversation = {this.searchConversation}
          />
        </Conversations>
        {/* FLOATING ACTION BUTTON */}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SearchChatPage')}
          style={styles.fabStyle}
        >
          <Icon name="chat" size={30} color={theme.colors.secondary} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ConversationsTab;
