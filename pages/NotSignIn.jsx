import { StyleSheet, View, Text } from 'react-native'
import Page from './Page'
import gStyles from '../gStyles'
import { colorStyles } from '../variables'
import SignInBigSVG from '../components/svg/SignInBigSVG'
import { TouchableOpacity } from 'react-native'

export default function NotSighIn({ navigation }) {
  return (
    <Page navigation={navigation}>
      <View style={styles.notSignIn}>
        <View style={[gStyles.mergeText, styles.notSignIn__mainText]}>
          <Text style={[gStyles.text, styles.notSignIn__mainText]}>
            <TouchableOpacity
              style={styles.notSignIn__link}
              onPress={() => navigation.navigate('signIn')}
            >
              <Text style={[gStyles.textUnderline, styles.notSignIn__linkText]}>
                Войдите
              </Text>
            </TouchableOpacity>{' '}
            <Text style={styles.notSignIn__simpleText}>или </Text>
            <TouchableOpacity
              style={styles.notSignIn__link}
              onPress={() => navigation.navigate('signUp')}
            >
              <Text style={[gStyles.textUnderline, styles.notSignIn__linkText]}>
                создайте аккаунт
              </Text>
            </TouchableOpacity>
            <Text style={styles.notSignIn__simpleText}>
              , чтобы открыть все возможности Роскадастр
            </Text>
          </Text>
        </View>
        <SignInBigSVG />
      </View>
    </Page>
  )
}

const styles = StyleSheet.create({
  notSignIn: {
    display: 'flex',
    flexDirection: 'column',
    height: 600,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  notSignIn__mainText: {
    width: '80%',
    flexWrap: 'wrap',
    textAlign: 'center',
    justifyContent: 'center',
    color: colorStyles.text.lightText,
  },
  notSignIn__link: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  notSignIn__linkText: {
    color: colorStyles.text.linkBlue,
    lineHeight: 17,
  },
  notSignIn__simpleText: {
    lineHeight: 22,
  },
})
