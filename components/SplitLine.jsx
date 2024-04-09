import { StyleSheet, View } from 'react-native'
import { colorStyles } from '../variables'

export default function SplitLine({ style, lineStyle }) {
  return (
    <View style={[styles.splitLine, style]}>
      <View style={[styles.splitLine__line, lineStyle]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  splitLine: {
    padding: 10,
  },
  splitLine__line: {
    width: '100%',
    height: 1,
    backgroundColor: colorStyles.border,
  },
})
