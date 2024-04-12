import { StyleSheet, View, ScrollView, Linking } from 'react-native'
import Page from './Page'
import gStyles from '../gStyles'
import ProfileBranch from '../components/ProfileBranch'
import ProfileHeader from '../components/ProfileHeader'
import ButtonForm from '../components/ButtonForm'
import { colorStyles } from '../variables'
import SplitLine from '../components/SplitLine'

export default function Profile({ navigation }) {
  return (
    <Page navigation={navigation}>
      <ScrollView style={styles.profile}>
        <ProfileHeader
          username="Наталья Волкова"
          city="г. Сыктыкар"
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
            onPress={() =>
              Linking.openURL('https://kadastr.ru/')
            }
          />
          <ButtonForm
            title="Официальная группа во Вконтакте"
            onPress={() =>
              Linking.openURL('https://vk.com/kadastr_ru')
            }
          />
          <SplitLine />
          <ButtonForm
            title="Выйти"
            textColor={colorStyles.text.error}
            onPress={() => navigation.navigate('notSignIn')}
          />
        </View>
        <View style={gStyles.emptyField}></View>
      </ScrollView>
    </Page>
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
