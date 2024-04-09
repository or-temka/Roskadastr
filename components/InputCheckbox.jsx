import { StyleSheet, Text, TextInput, View } from 'react-native'
import gStyles from '../gStyles'
import { colorStyles, typography } from '../variables'
import { useEffect, useState } from 'react'
import TickSVG from '../components/svg/TickSVG'
import { TouchableOpacity } from 'react-native'

export default function InputCheckbox({
  style,
  style__checkbox,
  style__text,
  text,
  onChange = () => {},
}) {
  const [checkboxActive, setCheckboxActive] = useState(false)

  useEffect(() => {
    onChange(checkboxActive)
  }, [checkboxActive])

  return (
    <TouchableOpacity
      style={[styles.inputCheckbox, style]}
      onPress={() => setCheckboxActive(!checkboxActive)}
    >
      <View style={styles.inputCheckbox__container}>
        <View
          style={[
            styles.inputCheckbox__checkbox,
            style__checkbox,
            checkboxActive && styles.inputCheckbox__checkbox_active,
          ]}
        >
          {checkboxActive && <TickSVG />}
        </View>
      </View>
      <Text style={[gStyles.text, styles.inputCheckbox__text, style__text]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  inputCheckbox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  inputCheckbox__container: {
    marginTop: 2,
  },
  inputCheckbox__checkbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    backgroundColor: colorStyles.border,
    borderRadius: 3,
  },
  inputCheckbox__checkbox_active: {
    backgroundColor: colorStyles.blue,
  },
  inputCheckbox__text: {},
})
