import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: 'red',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
const OptionsButtons = props => (
  <View>
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={[
        styles.iconContainer,
        { width: props.size, height: props.size, backgroundColor: props.color }
      ]}
    >
      <Icon size={props.size - 30} name={props.name} color="white" />
    </TouchableOpacity>
  </View>
);

export default OptionsButtons;
