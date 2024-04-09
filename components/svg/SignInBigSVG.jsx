import { StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { colorStyles } from '../../variables'

export default function SignInBigSVG() {
  return (
    <Svg
      width="48"
      height="44"
      viewBox="0 0 48 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0.666626 43.625V39.0417H5.33329V6.58021C5.33329 5.47105 6.14063 4.5223 7.24896 4.32521L29.3503 0.378962C30.111 0.241462 30.839 0.738754 30.9766 1.48584C30.993 1.56605 31 1.64625 31 1.73105V4.66438L40.3333 4.66667C41.6213 4.66667 42.6666 5.69334 42.6666 6.95834V39.0417H47.3333V43.625H38V9.25H31V43.625H0.666626ZM24 20.7083H19.3333V25.2917H24V20.7083Z"
        style={styles.svg}
      />
    </Svg>
  )
}

const styles = StyleSheet.create({
  svg: {
    fill: colorStyles.border,
  },
})
