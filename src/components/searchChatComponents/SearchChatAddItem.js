import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 20
  },
  innerContainer: {
    flexDirection: 'row'
  },
  iconContainer: {
    paddingHorizontal: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconBackground: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
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
  }
});

class SearchChatAddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.innerContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              <Icon color="white" size={25} name={this.props.icon} />
            </View>
          </View>
          <View style={styles.TextContainer}>
            <Text style={styles.titleStyle} numberOfLines={1}>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(SearchChatAddItem);
