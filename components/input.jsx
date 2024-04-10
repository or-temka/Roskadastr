import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import gStyles from '../gStyles'
import { colorStyles, typography } from '../variables'
import { useState } from 'react'

export default function Input({
  style,
  title = '',
  onChangeText = () => {},
  value,
  placeholder = '',
  isSecure = false,
  isEditable = true,
  errorText = '',
  multiline = false,
}) {
  const [errorTextValue, setErrorTextValue] = useState(errorText)

  function changeInputTextHandler(value) {
    setErrorTextValue('')
    onChangeText(value)
  }

  return (
    <View style={[styles.input, style]}>
      {title && (
        <Text style={[gStyles.lightParagraph, styles.input__title]}>
          {title}
        </Text>
      )}
      <TextInput
        style={[
          styles.input__input,
          errorTextValue && styles.input__error,
          multiline && styles.input__input_multiline,
        ]}
        onChangeText={(value) => changeInputTextHandler(value)}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colorStyles.text.lightText}
        secureTextEntry={isSecure}
        editable={isEditable}
        multiline={multiline}
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
  input__input_multiline: {
    height: 'auto',
    maxHeight: 140,
    minHeight: Platform.OS === 'ios' ? 30 : 40,
    paddingBottom: Platform.OS === 'ios' ? 9 : 7,
    paddingTop: Platform.OS === 'ios' ? 12 : 7,
  },
  input__error: {
    borderWidth: 1,
    borderColor: colorStyles.text.error,
  },
  input__errorText: {
    color: colorStyles.text.error,
  },
})
