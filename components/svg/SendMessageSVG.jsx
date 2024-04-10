import Svg, { Path } from 'react-native-svg'
import { colorStyles } from '../../variables'
import { StyleSheet } from 'react-native'

export default function SendMessageSVG({ active = false }) {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM11 10H14L10 6L6 10H9V14H11V10Z"
        style={active ? styles.svg_active : styles.svg}
      />
    </Svg>
  )
}

const styles = StyleSheet.create({
  svg: {
    fill: colorStyles.grey,
  },
  svg_active: {
    fill: colorStyles.blue,
  },
})
