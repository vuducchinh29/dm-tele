import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { theme } from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 20
  },
  innerContainer: {
    flexDirection: 'row'
  },
  imageContainer: {
    paddingHorizontal: 10,
    overflow: 'hidden',
    alignSelf: 'center'
  },
  ImageStyle: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  TextContainer: {
    flexDirection: 'column',
    maxWidth: '75%',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  titleStyle: {
    fontSize: theme.fontSize.title,
    color: theme.colors.title
  },
  descriptionStyle: {
    fontSize: theme.fontSize.subtitle,
    color: theme.colors.description
  }
});

class SearchChatItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('MessagePage', {
              username: this.props.username,
              user_id: this.props.user_id,
              status: this.props.status,
              bio: this.props.bio,
              imageSrc: this.props.imageSrc,
              isBlocked: this.props.isBlocked,
              isMuted: this.props.isMuted
            })
          }
          style={styles.innerContainer}
        >
          <View style={styles.imageContainer}>
            <Image style={styles.ImageStyle} source={{ uri: this.props.imageSrc }} />
          </View>
          <View style={styles.TextContainer}>
            <Text style={styles.titleStyle} numberOfLines={1}>
              {this.props.username}
            </Text>
            <Text style={styles.descriptionStyle} numberOfLines={1}>
              {this.props.bio}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(SearchChatItem);
