import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import StoryItem from './StoryItem';
import AddStoryCard from './AddStoryCard';

class Stories extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{ paddingTop: 0 }}>
        {/* A button That you can tap to add a story */}
        <AddStoryCard />
        <StoryItem
          imageSrc="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Jack Lestrade"
          time="3 Hours ago"
          stories={[
            {
              time: '3 Hours ago',
              url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            },
            {
              time: '2 Hours ago',
              url: 'https://images.pexels.com/photos/1343465/pexels-photo-1343465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            },
            {
              time: '1 Hour ago',
              url: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            }
          ]}
        />

        <StoryItem
          imageSrc="https://images.pexels.com/photos/1895160/pexels-photo-1895160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Jane Thompson"
          time="22 Hours ago"
          stories={[
            {
              time: '3 Hours ago',
              url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            }
          ]}
        />

        <StoryItem
          imageSrc="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Smith Timberlane"
          time="1 Hours ago"
          stories={[
            {
              time: '4 Hours ago',
              url: 'https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
              time: '3 Hours ago',
              url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            },
            {
              time: '2 Hours ago',
              url: 'https://images.pexels.com/photos/1343465/pexels-photo-1343465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            },
            {
              time: '1 Hour ago',
              url: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            }
          ]}
        />
      </ScrollView>
    );
  }
}

export default Stories;
