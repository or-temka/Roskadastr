import { StyleSheet, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { colorStyles } from '../../variables'

export default function MenuButtonSVG() {
  return (
    <Svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        style={styles.svg__path}
        d="M15 14V16H3V14H15ZM18 7V9H0V7H18ZM15 0V2H3V0H15Z"
      />
    </Svg>
  )
}

const styles = StyleSheet.create({
  svg__path: {
    fill: colorStyles.text.text,
  },
})
