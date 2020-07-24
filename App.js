import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { MTProto, getSRPParams } from '@mtproto/core'

const api_id = '1419179';
const api_hash = '0fbc49808dfa383bd1a3b381493ef836';

// 1. Create an instance
const mtproto = new MTProto({
  api_id,
  api_hash,
  test: true,

});

const phone = '+84989383129';
const code = 'XXXXX';
const password = 'PASSWORD';


export default class App extends Component {
  componentDidMount() {
    mtproto.call('help.getNearestDc').then(result => {
      console.log(`country:`, result.country);
    }).catch(e => console.log('bbb', e))
    this.sendCode(phone)
  }

  sendCode = (phone) => {
    mtproto.call('auth.sendCode', {
      length: 8
    }).catch(e => console.log('sss', e))
  }


  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}