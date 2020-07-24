import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation';
import { theme } from '../../theme';

const styles = StyleSheet.create({
  /* The Whole Components Style */
  containerStyle: {
    backgroundColor: theme.colors.tabItemBackground,
    paddingTop: 25,
    paddingRight: 20,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  /* Profile Image Container */
  imageContainer: {
    borderRadius: 25,
    height: 50,
    width: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  imageStyle: {
    height: 50,
    width: 50
  },
  callStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  usernameAndStatus: {
    paddingHorizontal: 10
  },
  usernameStyle: {
    color: theme.colors.title,
    fontSize: 18
  },
  iconStyle: {
    alignSelf: 'center'
  },
  timeStyle: {
    color: theme.colors.description,
    paddingHorizontal: 5
  },
  usernameAndCallContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center'
  }
});

class CallItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showCallStatus() {
    const { callStatusContainer, timeStyle, iconStyle } = styles;
    const { callStatus } = this.props;
    /* 0 = you called but he didnt answer
     1 = you called and he answered
     2 = they called but you didnt answer
     3 = they called and you answered */
    if (callStatus === 0) {
      return (
        <View style={callStatusContainer}>
          <FIcon style={iconStyle} name="arrow-right" size={15} color={theme.colors.danger} />
          <Text style={timeStyle}>{this.props.time}</Text>
        </View>
      );
    } else if (callStatus === 1) {
      return (
        <View style={callStatusContainer}>
          <FIcon name="arrow-right" size={15} color={theme.colors.success} />
          <Text style={timeStyle}>{this.props.time}</Text>
        </View>
      );
    } else if (callStatus === 2) {
      return (
        <View style={callStatusContainer}>
          <FIcon name="arrow-left" size={15} color={theme.colors.danger} />
          <Text style={timeStyle}>{this.props.time}</Text>
        </View>
      );
    } else if (callStatus === 3) {
      return (
        <View style={callStatusContainer}>
          <FIcon name="arrow-left" size={15} color={theme.colors.success} />
          <Text style={timeStyle}>{this.props.time}</Text>
        </View>
      );
    }
  }
  render() {
    const {
      containerStyle,
      imageStyle,
      usernameAndStatus,
      usernameAndCallContainer,
      usernameStyle,
      imageContainer
    } = styles;
    return (
      <View style={containerStyle}>
        <View style={[imageContainer]}>
          <Image style={imageStyle} source={{ uri: this.props.imageSrc }} />
        </View>
        <View style={usernameAndCallContainer}>
          <View style={usernameAndStatus}>
            <Text style={usernameStyle}>{this.props.username}</Text>
            {this.showCallStatus()}
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('MessagePage', {
                  username: this.props.username,
                  imageSrc: this.props.imageSrc
                })
              }
              style={{ padding: 10 }}
            >
              <MIcon name="chat" size={25} color={theme.colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('OnCallPage', {
                  username: this.props.username,
                  imageSrc: this.props.imageSrc
                })
              }
              style={{ padding: 10 }}
            >
              <FIcon name="phone" size={20} color={theme.colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(CallItem);
