import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 200,
    borderRadius: 100
  }
});

const ProfilePicture = props => (
  <View>
    <Image style={styles.imageStyle} source={{ uri: props.imageSrc }} />
  </View>
);

export default ProfilePicture;
