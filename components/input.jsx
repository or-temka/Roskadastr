import { StyleSheet, Text, TextInput, View } from 'react-native'
import gStyles from '../gStyles'
import { colorStyles, typography } from '../variables'

export default function Input({
  style,
  title,
  onChangeText = () => {},
  value,
  placeholder,
  isSecure = false,
  isEditable = true,
}) {
  return (
    <View style={[styles.input, style]}>
      <Text style={[gStyles.lightParagraph, styles.input__title]}>{title}</Text>
      <TextInput
        style={styles.input__input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colorStyles.text.lightText}
        secureTextEntry={isSecure}
        editable={isEditable}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  input__title: {
    marginLeft: 5,
  },
  input__input: {
    ...typography.text,
    textDecorationLine: 'none',
    backgroundColor: colorStyles.background,
    borderRadius: 4,
    height: 40,
    paddingHorizontal: 15,
  },
})
