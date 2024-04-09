import { StyleSheet, View, Text } from 'react-native'
import { colorStyles } from '../variables'
import gStyles from '../gStyles'

export default function SplitLineText({ text, style, lineStyle, textStyle }) {
  return (
    <View style={[styles.splitLineText, style]}>
      <View style={[styles.splitLineText__line, lineStyle]}></View>
      <View style={styles.splitLineText__textContainer}>
        <Text
          style={[
            gStyles.smallLightText,
            styles.splitLineText__text,
            textStyle,
          ]}
        >
          {text}
        </Text>
      </View>
      <View style={[styles.splitLineText__line, lineStyle]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  splitLineText: {
    padding: 10,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center"
  },
  splitLineText__line: {
    flex: 1,
    height: 1,
    backgroundColor: colorStyles.border,
  },
  splitLineText__textContainer: {
    paddingHorizontal: 10
  },
  splitLineText__text: {
    color: colorStyles.grey
  },
})
