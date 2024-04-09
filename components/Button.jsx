import { StyleSheet, Text } from 'react-native'
import gStyles from '../gStyles'
import { colorStyles } from '../variables'
import { TouchableOpacity } from 'react-native'

export default function Button({
  title,
  onPress = () => {},
  style,
  isFocusBtn = false,
  isDisabled = false,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, style, isFocusBtn && styles.button_focusBtn]}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text style={[gStyles.text, isFocusBtn && styles.button__text_fucusBtn]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: colorStyles.border,
  },
  button_focusBtn: {
    backgroundColor: colorStyles.text.linkBlue,
  },
  button__text_fucusBtn: {
    color: colorStyles.text.textReverse,
  },
})
