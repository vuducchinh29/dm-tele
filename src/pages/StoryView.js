import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  innerContainer: {
    position: 'absolute',
    zIndex: 10,
    width: '100%'
  },
  profileContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignContent: 'center',
    overflow: 'hidden',
    paddingVertical: 10
  },
  profilePicStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginHorizontal: 10,
    alignSelf: 'center'
  },
  titleAndSubtitleContainer: {
    justifyContent: 'center'
  },
  titleTextStyle: {
    color: 'white',
    fontSize: theme.fontSize.title
  },
  subtitleTextStyle: {
    color: theme.colors.description,
    fontSize: theme.fontSize.description
  },
  borderTimeContainer: {
    backgroundColor: theme.colors.primary,
    height: 3,
    width: '0%'
  },
  storyImageContainer: {
    backgroundColor: 'black'
  },
  storyImageStyle: {
    height: '100%',
    maxWidth: '100%'
  },
  previousTouchArea: {
    backgroundColor: '#0000',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '30%',
    zIndex: 1
  },
  nextTouchArea: {
    backgroundColor: '#0000',
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '30%',
    zIndex: 1
  }
});

class StoryView extends Component {
  // THIS OPTION IS TO SHOW/HIDE DEFAULT NAVIGATION HEADER
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      stories: props.navigation.getParam('stories', []),
      currentStory: 0,
      width: '0%'
    };
  }

  componentDidMount() {
    this.setStoryWidth();
  }

  setStoryWidth() {
    const { stories, currentStory } = this.state;
    const length = stories.length;
    const current = currentStory + 1;
    const width = (current / length) * 100;
    this.setState({
      width: `${width}%`
    });
  }

  next() {
    const { stories, currentStory } = this.state;
    if (currentStory < stories.length - 1) {
      this.setState(
        {
          currentStory: currentStory + 1
        },
        () => {
          this.setStoryWidth();
        }
      );
    } else {
      this.props.navigation.goBack();
    }
  }
  previous() {
    const { currentStory } = this.state;
    if (currentStory > 0) {
      this.setState(
        {
          currentStory: currentStory - 1
        },
        () => {
          this.setStoryWidth();
        }
      );
    }
  }

  render() {
    /* Calling the props */
    const username = this.props.navigation.getParam('username', 'no name available');
    const imageSrc = this.props.navigation.getParam('imageSrc', null);
    return (
      <View style={styles.mainContainer}>
        {/* The previous and next button */}
        <TouchableOpacity onPress={() => this.previous()} style={styles.previousTouchArea} />
        <TouchableOpacity onPress={() => this.next()} style={styles.nextTouchArea} />

        {/* The profile Container */}
        <View style={styles.innerContainer}>
          <View style={styles.profileContainer}>
            <Image style={styles.profilePicStyle} source={{ uri: imageSrc }} />
            <View style={styles.titleAndSubtitleContainer}>
              <Text style={styles.titleTextStyle}> {username} </Text>
              <Text style={styles.subtitleTextStyle}>
                {this.state.stories[this.state.currentStory].time}
              </Text>
            </View>
          </View>
          <View style={[styles.borderTimeContainer, { width: this.state.width }]} />
        </View>
        {/* The big story */}
        <View style={styles.storyImageContainer}>
          <Image
            style={styles.storyImageStyle}
            source={{ uri: this.state.stories[this.state.currentStory].url }}
          />
        </View>
      </View>
    );
  }
}

export default StoryView;
