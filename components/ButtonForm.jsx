import { StyleSheet, Text } from 'react-native'
import gStyles from '../gStyles'
import { colorStyles } from '../variables'
import { TouchableOpacity } from 'react-native'

export default function ButtonForm({ title, textColor, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={[gStyles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
})
