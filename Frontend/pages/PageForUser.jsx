import { View, Text, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import Page from './Page'
import { getUserToken } from '../utils/userTokenStorage'

// Страница-обертка для тех, кто не вошел в аккаунт (не позваляет заходить на неавторизированные страницы)
export default function PageForUser({ children, navigation, style }) {
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    async function checkUserToken() {
      const token = await getUserToken()
      if (!token) {
        setIsUser(false)
        navigation.reset({
          routes: [{ name: 'notSignIn' }],
        })
      } else {
        setIsUser(true)
      }
    }
    checkUserToken()
  }, [])

  if (isUser) {
    return (
      <View style={{ flex: 1 }}>
        <Page children={children} navigation={navigation} style={style} />
      </View>
    )
  } else {
    return (
      <View
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
