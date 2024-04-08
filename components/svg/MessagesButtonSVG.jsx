import { StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { colorStyles } from '../../variables'

export default function MessagesButtonSVG({ active }) {
  return (
    <Svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        style={active ? styles.svg_active : styles.svg}
        d="M4.62166 16L0.166656 19.5V1C0.166656 0.734784 0.272013 0.48043 0.45955 0.292893C0.647086 0.105357 0.90144 0 1.16666 0H19.1667C19.4319 0 19.6862 0.105357 19.8738 0.292893C20.0613 0.48043 20.1667 0.734784 20.1667 1V15C20.1667 15.2652 20.0613 15.5196 19.8738 15.7071C19.6862 15.8946 19.4319 16 19.1667 16H4.62166ZM3.92966 14H18.1667V2H2.16666V15.385L3.92966 14ZM9.16666 7H11.1667V9H9.16666V7ZM5.16666 7H7.16666V9H5.16666V7ZM13.1667 7H15.1667V9H13.1667V7Z"
      />
    </Svg>
  )
}

const styles = StyleSheet.create({
  svg: {
    fill: colorStyles.grey,
  },
  svg_active: {
    fill: colorStyles.text.linkBlue,
  },
})
