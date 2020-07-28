import { MTProto } from '@mtproto/core'
import AsyncStorage from '@react-native-community/async-storage'

const api_id = '1419179';
const api_hash = '0fbc49808dfa383bd1a3b381493ef836';

export const API = new MTProto({
  api_id,
  api_hash,
  customLocalStorage: AsyncStorage
});;