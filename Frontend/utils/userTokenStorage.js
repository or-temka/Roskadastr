import AsyncStorage from '@react-native-async-storage/async-storage'

export const getUserToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken')

    return token
  } catch (err) {
    console.log(err)
    return null
  }
}

export const setUserToken = async (token) => {
  try {
    await AsyncStorage.setItem('userToken', token)
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('userToken')

    return true
  } catch (err) {
    console.log(err)
    return false
  }
}
