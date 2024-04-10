import { StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { colorStyles } from '../../variables'

export default function ServiceAddButtonSVG({ active, width = "23", height = "23"}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        style={active ? styles.svg_active : styles.svg}
        d="M1.83333 0H17.8333C18.0985 0 18.3529 0.105357 18.5404 0.292893C18.728 0.48043 18.8333 0.734784 18.8333 1V17C18.8333 17.2652 18.728 17.5196 18.5404 17.7071C18.3529 17.8946 18.0985 18 17.8333 18H1.83333C1.56811 18 1.31376 17.8946 1.12622 17.7071C0.938685 17.5196 0.833328 17.2652 0.833328 17V1C0.833328 0.734784 0.938685 0.48043 1.12622 0.292893C1.31376 0.105357 1.56811 0 1.83333 0ZM2.83333 2V16H16.8333V2H2.83333ZM8.83333 8V4H10.8333V8H14.8333V10H10.8333V14H8.83333V10H4.83333V8H8.83333Z"
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
