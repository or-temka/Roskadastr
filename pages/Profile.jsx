import { StyleSheet, View, ScrollView } from 'react-native'
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
        />
        <ProfileBranch style={styles.profile__item} />
        <View style={styles.profile__menuOptions}>
          <ButtonForm title="Редактировать профиль" />
          <ButtonForm title="Помощь" />
          <SplitLine />
          <ButtonForm title="Выйти" textColor={colorStyles.text.error} />
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
