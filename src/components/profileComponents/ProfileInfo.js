import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../theme';

/* STYLES: you can change Colors, Sizes, Shapes, ETC */
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.tabPageBackground,
    flexDirection: 'column',
    paddingBottom: 10
  },
  imageContainer: {
    marginTop: 5,
    alignItems: 'center',
    marginHorizontal: 80,
    borderRadius: 125,
    marginBottom: 10
  },
  imageStyle: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  usernameContainer: {
    alignItems: 'center',
    marginBottom: 10
  },
  usernameStyle: {
    color: theme.colors.title,
    fontSize: 18,
    fontWeight: 'bold'
  },
  bioContainer: {
    marginHorizontal: 50,
    backgroundColor: theme.colors.inputBackground,
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  bioStyle: {
    color: theme.colors.description,
    alignSelf: 'center'
  },
  editIconStyle: {
    alignSelf: 'flex-end',
    padding: 5
  },
  friendsBioContainer: {
    marginHorizontal: 50,
    backgroundColor: theme.colors.inputBackground,
    alignContent: 'center',
    padding: 5
  }
});
class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /* Function: it checks if wether its your profile or other users profile
if it's your profile it will show u the edit button to edit your bio 
otherwise it wont let you edit */
  ShowEditButton() {
    const {
      imageContainer,
      imageStyle,
      usernameContainer,
      usernameStyle,
      bioContainer,
      bioStyle,
      editIconStyle,
      friendsBioContainer
    } = styles;

    /* Function: check wether if its your profile or your contact's profile */
    if (this.props.myProfile) {
      return (
        <View>
          <TouchableOpacity style={imageContainer}>
            <Image style={imageStyle} source={{ uri: this.props.profilePicture }} />
          </TouchableOpacity>
          <View style={usernameContainer}>
            <Text style={usernameStyle}> {this.props.username} </Text>
          </View>
          <TouchableOpacity style={bioContainer}>
            <Text numberOfLines={3} style={bioStyle}>
              {this.props.bio}
            </Text>
            <Icon style={editIconStyle} name="pencil" size={25} color={theme.colors.secondary} />
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View>
        <View style={imageContainer}>
          <Image style={imageStyle} source={{ uri: this.props.profilePicture }} />
        </View>
        <View style={usernameContainer}>
          <Text style={usernameStyle}> {this.props.username} </Text>
        </View>
        <View style={friendsBioContainer}>
          <Text numberOfLines={3} style={bioStyle}>
            {this.props.bio}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    /* DECONSTRUCTION : ease of our work */
    const { mainContainer } = styles;
    return (
      /* Main Container that holds everything related to the Info of our profile  */
      <View style={mainContainer}>{this.ShowEditButton()}</View>
    );
  }
}

export default ProfileInfo;
