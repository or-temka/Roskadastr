import {
  StyleSheet,
  View,
  ScrollView,
  Linking,
  ActivityIndicator,
} from 'react-native'
import gStyles from '../gStyles'
import ProfileBranch from '../components/ProfileBranch'
import ProfileHeader from '../components/ProfileHeader'
import ButtonForm from '../components/ButtonForm'
import { colorStyles } from '../variables'
import SplitLine from '../components/SplitLine'
import { getUserToken, removeToken } from '../utils/userTokenStorage'
import PageForUser from './PageForUser'
import axios from '../axios'
import { useEffect, useState } from 'react'

export default function Profile({ navigation }) {
  const [isLoading, setIsLoading] = useState(true)

  const [username, setUsername] = useState('')
  const [userCity, setUserCity] = useState('')

  // Запрос данных для аккаунта
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get('/user/me', {
          headers: {
            Authorization: await getUserToken(),
          },
        })

        setUsername(data.name + ' ' + data.surname)
        setUserCity(data.city)

        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUserData()
  }, [])

  const exitFromAccountHandler = async () => {
    if (await removeToken()) {
      navigation.reset({
        routes: [{ name: 'notSignIn' }],
      })
    }
  }

  if (isLoading) {
    return (
      <PageForUser navigation={navigation}>
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
      </PageForUser>
    )
  }

  return (
    <PageForUser navigation={navigation}>
      <ScrollView style={styles.profile}>
        <ProfileHeader
          username={username}
          city={`г. ${userCity}`}
          style={styles.profile__item}
          navigation={navigation}
        />
        <ProfileBranch style={styles.profile__item} />
        <View style={styles.profile__menuOptions}>
          <ButtonForm
            title="Редактировать профиль"
            onPress={() => navigation.navigate('editProfile')}
          />
          <ButtonForm
            title="Помощь"
            onPress={() =>
              Linking.openURL('https://kadastr.ru/feedback/online/')
            }
          />
          <ButtonForm
            title="Официальный сайт"
            onPress={() => Linking.openURL('https://kadastr.ru/')}
          />
          <ButtonForm
            title="Официальная группа во Вконтакте"
            onPress={() => Linking.openURL('https://vk.com/kadastr_ru')}
          />
          <SplitLine />
          <ButtonForm
            title="Выйти"
            textColor={colorStyles.text.error}
            onPress={exitFromAccountHandler}
          />
        </View>
        <View style={gStyles.emptyField}></View>
      </ScrollView>
    </PageForUser>
  )
}

const styles = StyleSheet.create({
  profile: {},
  profile__item: {
    marginBottom: 5,
  },
  profile__menuOptions: {
    backgroundColor: colorStyles.backgroundFocus,
    borderRadius: 10,
    paddingVertical: 10,
  },
})
