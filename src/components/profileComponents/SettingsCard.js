import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.tabItemBackground,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray'
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 18,
    color: theme.colors.title,
    paddingHorizontal: 20
  }
});

const SettingsCard = props => {
  const { title, icon } = props;
  const { mainContainer, textStyle, innerContainer } = styles;
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={mainContainer}>
      <View style={innerContainer}>
        <Icon name={icon} size={20} color={props.color || theme.colors.primary} />
        <Text style={textStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SettingsCard;
