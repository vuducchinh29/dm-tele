import React, { Component } from 'react';
import { TouchableOpacity, View, StatusBar, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import { theme } from '../../theme';

const styles = StyleSheet.create({
  /* ============= MODAL STYLES ============= */
  modalMainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10
  },
  modalInnerContainer: {
    backgroundColor: theme.colors.tabPageBackground,
    borderRadius: 20,
    elevation: 3,
    overflow: 'hidden'
  },
  modalUsernameContainer: {
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#5557',
    width: '100%',
    alignItems: 'center'
  },
  modalUsernameStyle: {
    color: 'white',
    backgroundColor: 'transparent'
  },
  modalImageStyle: {
    width: 200,
    height: 200,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  modalOptionsContainer: {
    backgroundColor: theme.colors.tabPageBackground,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  modalIconContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10
  }
});

class MiniProfile extends Component {
  render() {
    const { modalIconContainer } = styles;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => this.props.hide()}
        style={styles.modalMainContainer}
      >
        <View style={styles.modalInnerContainer}>
          <StatusBar backgroundColor="rgba(0,0,0,0.1)" barStyle="dark-content" />
          <TouchableOpacity activeOpacity={1}>
            <Image style={styles.modalImageStyle} source={{ uri: this.props.imageSrc }} />
            <View style={styles.modalUsernameContainer}>
              <Text numberOfLines={2} style={styles.modalUsernameStyle}>
                {this.props.username}
              </Text>
            </View>
            <View style={styles.modalOptionsContainer}>
              {/* Button: tap it and it opens The message Section with that person */}
              <TouchableOpacity
                onPress={() => {
                  this.props.hide();
                  this.props.navigation.navigate('MessagePage', {
                    username: this.props.username,
                    bio: this.props.bio,
                    imageSrc: this.props.imageSrc,
                    isBlocked: this.props.isBlocked,
                    isMuted: this.props.isMuted
                  });
                }}
                style={modalIconContainer}
              >
                <Icon name="align-left" size={25} color={theme.colors.primary} />
              </TouchableOpacity>
              {/* Button: tap on it and it will call the selected individual */}
              <TouchableOpacity
                onPress={() => {
                  this.props.hide();
                  this.props.navigation.navigate('OnCallPage', {
                    username: this.props.username,
                    imageSrc: this.props.imageSrc
                  });
                }}
                style={modalIconContainer}
              >
                <Icon name="phone" size={25} color={theme.colors.primary} />
              </TouchableOpacity>
              {/* Button: tap on it and it will open the selectd contact info */}
              <TouchableOpacity
                style={modalIconContainer}
                onPress={() => {
                  this.props.hide();
                  this.props.navigation.navigate('FriendsProfilePage', {
                    username: this.props.username,
                    bio: this.props.bio,
                    imageSrc: this.props.imageSrc,
                    isBlocked: this.props.isBlocked,
                    isMuted: this.props.isMuted
                  });
                }}
              >
                <Icon name="info-circle" size={25} color={theme.colors.primary} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(MiniProfile);
