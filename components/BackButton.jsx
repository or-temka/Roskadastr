import { StyleSheet, Text } from 'react-native'
import gStyles from '../gStyles'
import { colorStyles } from '../variables'
import { TouchableOpacity } from 'react-native'
import ArrowLeftSVG from './svg/ArrowLeftSVG'

export default function BackButton({
  navigation,
  style,
  backNamePage = 'news',
}) {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.navigate(backNamePage)}
    >
      <ArrowLeftSVG />
      <Text style={gStyles.text}>Назад</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backButton: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    paddingVertical: 8,
    borderRadius: 5,
  },
})
