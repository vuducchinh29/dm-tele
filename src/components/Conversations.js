import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import ConversationItem from './ConversationItem';
import Utils from '../assets/utils'
import { API } from '../assets/constants'

class Conversations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: null,
    }
  }
  componentDidMount = async () => {
    const user_info_str = await Utils.getData('user_info')
    const user_info = JSON.parse(user_info_str)
    const user_id = user_info.id
    if (user_id) {
      API.call('messages.getAllChats', {
        except_ids: []
      })
      .then((response) => {
        console.log(response);
        this.setState({
          chats: response.chats
        })
      })
      .catch((err) => console.error(err));
    }
  };
  render() {
    const { searchText } = this.props
    const { chats } = this.state
    return (
      <ScrollView>
        {/*  we can insert More components in to this scrollView
        if we want to for ex: (SEARCH_INPUT) */}
        {this.props.children}

        {/* a Contact Component which has the followings:
        goToProfilePage={() => example()} the function when we tap on the image
        goToMessagePage={() => example()} the function when we click on the component
        imageSrc="example.com/image" the profile picture of the user
        usernme:"john Killer"  the name of the user
        description="Hey, Its me"  the message
        time="15:00"  the time the message sent/recieved
        notification= "5" number of notications 
        hasStory : if you pass this parameter, then a circle will appear around the image
        isBlocked: wether the target is blocked or not
        isMuted: wether the target is muted or not
        */}
        {chats ? 
          chats.length > 0 ? 
          chats
            .filter((data) => {return data.title.toLowerCase().includes(searchText.toLowerCase())})
            .map((data, key) => (
              <ConversationItem
                key={key}
                imageSrc= {data.imageSrc}
                username= {data.title}
                bio={data.bio}
                description={data.description}
                time={data.time}
                notification={data.notification}
                isBlocked = {data.isBlocked}
                isMuted = {data.isMuted}
                hasStory = {data.hasStory}
              />
            ))
          : <Text
              style={{
                alignSelf: 'center',
                color: 'darkgray',
                fontSize: 14
              }}
            >No conversation</Text>
        : <Text
            style={{
              alignSelf: 'center',
              color: 'darkgray',
              fontSize: 14
            }}
          >Loading conversation...</Text>
        }
      </ScrollView>
    );
  }
}

export default Conversations;
