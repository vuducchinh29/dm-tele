import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../../theme';

const styles = StyleSheet.create({
  mainContainer: { paddingBottom: 10 },
  innerContainer: {
    paddingRight: 20,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  imageContainer: {
    marginRight: 15,
    overflow: 'hidden',
    paddingVertical: 10
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  iconContainer: {
    position: 'absolute',
    backgroundColor: theme.colors.primary,
    borderRadius: 12.5,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    top: 45
  },
  iconStyle: {},
  textContainer: {
    justifyContent: 'center'
  },
  textStyle: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.title,
    fontWeight: 'normal'
  }
});
class AddStoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={{
                uri:
                  'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              }}
            />
            <View style={styles.iconContainer}>
              <Icon name="plus" size={15} style={styles.iconStyle} color="white" />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Add a Story</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddStoryCard;
