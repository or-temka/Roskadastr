import { StyleSheet, View } from 'react-native'
import DownMenu from '../components/DownMenu'

export default function Page({ children, navigation }) {
  return (
    <View style={styles.container}>
      { children }
      <DownMenu navigation={navigation} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
