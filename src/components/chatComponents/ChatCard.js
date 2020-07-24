import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

/* Styles for the components */
const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
    marginVertical: 5
  },
  chatContainer: {
    backgroundColor: theme.colors.primary,
    maxWidth: '80%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10
  },
  MessageViewStyle: {
    backgroundColor: 'transparent',
    maxWidth: '80%'
  },
  timeViewStyle: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    paddingLeft: 10
  },
  messageTextStyle: {
    color: 'white',
    alignSelf: 'flex-start',
    fontSize: 15
  },
  timeTextStyle: {
    color: 'lightgray',
    alignSelf: 'flex-end',
    fontSize: 10
  }
});

class ChatCard extends Component {
  /* FUNCTION: CHECK IF THE CHAT IS ON THE ((((LEFT SIDE)))) - AND THEN STYLE IT */
  isOnLeftSide(type) {
    // CHECK IF THE TYPE IS chatContainer And Then set it to left side and change BackgroundColor
    if (this.props.isLeft === true && type === 'chatContainer') {
      return {
        alignSelf: 'flex-start',
        backgroundColor: '#f0f0f0'
      }; // CHECK IF THE TYPE IS messageText And Then set it's color to Black
    } else if (this.props.isLeft === true && type === 'messageTextStyle') {
      return {
        color: 'black'
      }; // CHECK IF THE TYPE IS TimeText And Then set it's color to darkgray
    } else if (this.props.isLeft === true && type === 'timeTextStyle') {
      return {
        color: 'darkgray'
      };
    }
  }

  render() {
    /* Deconstruction: Styles */
    const {
      mainContainer,
      chatContainer,
      MessageViewStyle,
      timeViewStyle,
      messageTextStyle,
      timeTextStyle
    } = styles;

    return (
      /* MAIN CONTAINER: it is the parent that contains the chat container  */
      <View style={[mainContainer]}>
        {/* CHAT CONTAINER: contains the Message view and Time view */}
        <View style={[chatContainer, this.isOnLeftSide('chatContainer')]}>
          {/* MESSAGE VIEW: the Message is located in here */}
          <View style={MessageViewStyle}>
            <Text style={[messageTextStyle, this.isOnLeftSide('messageTextStyle')]}>
              {this.props.chat}
            </Text>
          </View>

          {/* TIME VIEW: the time Text is located in here*/}
          <View style={timeViewStyle}>
            <Text style={[timeTextStyle, this.isOnLeftSide('timeTextStyle')]}>
              {this.props.time}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ChatCard;
