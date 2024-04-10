import { StyleSheet, Text, TextInput, View } from 'react-native'
import gStyles from '../gStyles'
import { colorStyles, typography } from '../variables'
import { useEffect, useState } from 'react'

export default function Input({
  style,
  title = '',
  onChangeText = () => {},
  value,
  placeholder = '',
  isSecure = false,
  isEditable = true,
  errorText = '',
}) {
  const [errorTextValue, setErrorTextValue] = useState(errorText)

  function changeInputTextHandler() {
    setErrorTextValue('')
    onChangeText()
  }

  return (
    <View style={[styles.input, style]}>
      <Text style={[gStyles.lightParagraph, styles.input__title]}>{title}</Text>
      <TextInput
        style={[styles.input__input, errorTextValue && styles.input__error]}
        onChangeText={changeInputTextHandler}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colorStyles.text.lightText}
        secureTextEntry={isSecure}
        editable={isEditable}
      />
      {errorTextValue && (
        <Text style={[gStyles.paragraph, styles.input__errorText]}>
          {errorTextValue}
        </Text>
      )}
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
  input__error: {
    borderWidth: 1,
    borderColor: colorStyles.text.error,
  },
  input__errorText: {
    color: colorStyles.text.error,
  },
})
