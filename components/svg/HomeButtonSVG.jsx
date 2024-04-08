import { StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { colorStyles } from '../../variables'

export default function HomeButtonSVG({ active }) {
  return (
    <Svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        style={ active ? styles.svg_active : styles.svg}
        d="M10.5 17H16.5V7.978L9.5 2.534L2.5 7.978V17H8.5V11H10.5V17ZM18.5 18C18.5 18.2652 18.3946 18.5196 18.2071 18.7071C18.0196 18.8946 17.7652 19 17.5 19H1.5C1.23478 19 0.98043 18.8946 0.792893 18.7071C0.605357 18.5196 0.5 18.2652 0.5 18V7.49C0.499895 7.33761 0.534617 7.18721 0.601516 7.0503C0.668415 6.91338 0.76572 6.79356 0.886 6.7L8.886 0.477997C9.06154 0.341443 9.2776 0.267303 9.5 0.267303C9.7224 0.267303 9.93846 0.341443 10.114 0.477997L18.114 6.7C18.2343 6.79356 18.3316 6.91338 18.3985 7.0503C18.4654 7.18721 18.5001 7.33761 18.5 7.49V18Z"
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
  }
})
