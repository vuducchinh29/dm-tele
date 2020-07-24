import React, { Component } from 'react';
import { View, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* STYLES: you can change Colors, Sizes, Shapes, ETC */
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'transparent',
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
});
class bigImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /* DECONSTRUCTION : ease of our work */
    const {
      mainContainer,
      imageContainer,
    } = styles;
    return (
      /* Main Container that holds everything related to the Image  */
      <View style={mainContainer}>
        <View>
          <View style={imageContainer}>
            <Icon name={this.props.icon} size={this.props.size} color={this.props.color} />
          </View>
        </View></View>
    );
  }
}

export default bigImageComponent;
