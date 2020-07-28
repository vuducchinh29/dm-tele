import AsyncStorage from '@react-native-community/async-storage'

const Utils = {
    async saveData(title, data) {
        try {
            await AsyncStorage.setItem(title, JSON.stringify(data))
        } catch (error) {
            console.error(error)    
        }
    },
    async getData(title) {
        try {
            return await AsyncStorage.getItem(title)
        } catch (error) {
            console.error(error)    
        }
    }
}

export default Utils;