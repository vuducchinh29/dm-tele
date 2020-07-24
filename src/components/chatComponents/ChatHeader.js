import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import { theme } from '../../theme';
/* Styles for the components */
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.tabBackground,
    paddingVertical: 5
  },
  backButtonStyle: {
    alignSelf: 'center',
    paddingHorizontal: 10
  },
  profileAndOptionsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10
  },
  profileStyle: {
    flexDirection: 'row',
    flex: 4
  },
  imageStyle: {
    height: 65,
    width: 65,
    borderRadius: 32.5
  },
  usernameAndDescriptionStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  usernameStyle: {
    color: theme.colors.title,
    fontSize: 18,
    fontWeight: 'bold'
  },
  descriptionStyle: {
    color: theme.colors.description,
    fontSize: 16
  },
  optionsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1.5
  }
});

class ChatHeader extends Component {
  render() {
    /* Deconstruction: Styles */
    const {
      container,
      profileStyle,
      backButtonStyle,
      profileAndOptionsStyle,
      usernameAndDescriptionStyle,
      optionsStyle,
      imageStyle,
      usernameStyle,
      descriptionStyle
    } = styles;
    return (
      /* The parent Container: holds Every Component in this class */
      <View style={container}>
        {/* BACK BUTTON to go back to the page where it came from  */}
        <TouchableOpacity onPress={() => this.props.onPress()} style={backButtonStyle}>
          <Icon name="angle-left" size={30} color={theme.colors.secondary} />
        </TouchableOpacity>
        {/* ProfileAndOptions Container: contains The Profile Image and 
        the username and Seen status */}
        <View style={profileAndOptionsStyle}>
          {/* BUTTON: when pressed It will take you to the profile page */}
          <TouchableOpacity onPress={() => this.props.onOpenProfile()} style={profileStyle}>
            <Image style={imageStyle} source={{ uri: this.props.imageSrc }} />
            <View style={usernameAndDescriptionStyle}>
              <Text style={usernameStyle}>{this.props.username}</Text>
              <Text style={descriptionStyle}>{this.props.onlineStatus}</Text>
            </View>
          </TouchableOpacity>
          {/* OPTIONS Container: Contain All of the options buttons (Calls, Attachment, options) */}
          <View style={optionsStyle}>
            {/* Call Button Container: contains The call Icon */}
            <TouchableOpacity style={{ paddingHorizontal: 5 }}>
              <Icon
                onPress={() => {
                  this.props.navigation.navigate('OnCallPage', {
                    username: this.props.username,
                    imageSrc: this.props.imageSrc
                  });
                }}
                name="phone"
                size={30}
                color={theme.colors.secondary}
              />
            </TouchableOpacity>
            {/* Attachments Button Container: contains The Attachments Icon */}
            <TouchableOpacity style={{ paddingHorizontal: 5 }}>
              <Icon name="paperclip" size={30} color={theme.colors.secondary} />
            </TouchableOpacity>
            {/* Options Button Container: contains The Options Icon */}
            <TouchableOpacity style={{ paddingHorizontal: 10 }}>
              <Icon name="ellipsis-v" size={30} color={theme.colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(ChatHeader);
