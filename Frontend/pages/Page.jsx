import { StatusBar, StyleSheet, View } from 'react-native'
import DownMenu from '../components/DownMenu'

export default function Page({ children, navigation, style }) {
  return (
    <View style={[styles.page, style]}>
      <View style={styles.page__contentContainer}>{children}</View>
      <DownMenu navigation={navigation} />
      <StatusBar barStyle="dark-content" />
    </View>
  )
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: 52,
    position: 'relative',
  },
  page__contentContainer: {
    flex: 1,
    paddingBottom: 49,
  },
})
