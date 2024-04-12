import { StyleSheet, Text, View } from 'react-native'
import { colorStyles} from '../variables'
import HomeButtonSVG from './svg/HomeButtonSVG'
import ServiceAddButtonSVG from './svg/ServiceAddButtonSVG'
import MessagesButtonSVG from './svg/MessagesButtonSVG'
import ProfileButtonSVG from './svg/ProfileButtonSVG'
import { TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function DownMenu({ navigation }) {
  function openPage(pageName) {
    navigation.navigate(pageName)
  }

  const currentPage = useRoute().name

  const newsPages = ['news', 'vacancy', 'aboutUs']
  const servicePages = [
    'services',
    'serviceAdd',
    'serviceInfo',
    'chooseServiceForAdd',
  ]
  const messagesPages = ['messages']
  const profilePages = [
    'profile',
    'notSignIn',
    'signUp',
    'signIn',
    'editProfile',
  ]

  return (
    <View style={styles.downMenu__menu}>
      <TouchableOpacity
        style={styles.downMenu__element}
        onPress={() => openPage('news')}
      >
        <HomeButtonSVG
          active={newsPages.includes(currentPage) ? true : false}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.downMenu__element}
        onPress={() => openPage('services')}
      >
        <ServiceAddButtonSVG
          active={servicePages.includes(currentPage) ? true : false}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.downMenu__element}
        onPress={() => openPage('messages')}
      >
        <MessagesButtonSVG
          active={messagesPages.includes(currentPage) ? true : false}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.downMenu__element}
        onPress={() => openPage('profile')}
      >
        <ProfileButtonSVG
          active={profilePages.includes(currentPage) ? true : false}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  downMenu__menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colorStyles.backgroundFocus,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  downMenu__element: {
    width: '25%',
    height: 48,
    borderTopWidth: 1,
    borderTopColor: colorStyles.border,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
