import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import CallItem from './CallItem';

class Calls extends Component {
  render() {
    return (
      <ScrollView>
        <CallItem
          imageSrc="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          username="Bruce Mars"
          /* callStatus --------
     0 = you called but he didnt answer
     1 = you called and he answered
     2 = they called but you didnt answer
     3 = they called and you answered */
          callStatus={0}
          time="12:00 PM Today"
        />
        <CallItem
          imageSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Bayar Botany"
          /* callStatus --------
     0 = you called but he didnt answer
     1 = you called and he answered
     2 = they called but you didnt answer
     3 = they called and you answered */
          callStatus={1}
          time="12:00 PM Today"
        />
        <CallItem
          imageSrc="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="marie watson"
          /* callStatus --------
     0 = you called but he didnt answer
     1 = you called and he answered
     2 = they called but you didnt answer
     3 = they called and you answered */
          callStatus={2}
          time="12:00 PM Today"
        />
        <CallItem
          imageSrc="https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Victoria Martinez"
          /* callStatus --------
     0 = you called but he didnt answer
     1 = you called and he answered
     2 = they called but you didnt answer
     3 = they called and you answered */
          callStatus={3}
          time="12:00 PM Today"
        />
      </ScrollView>
    );
  }
}

export default Calls;
