import { StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { colorStyles } from '../../variables'

export default function ProfileEditBtnSVG() {
  return (
    <Svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M13.757 1.00001L11.757 3.00001H2V17H16V7.24301L18 5.24301V18C18 18.2652 17.8946 18.5196 17.7071 18.7071C17.5196 18.8946 17.2652 19 17 19H1C0.734784 19 0.48043 18.8946 0.292893 18.7071C0.105357 18.5196 0 18.2652 0 18V2.00001C0 1.73479 0.105357 1.48044 0.292893 1.2929C0.48043 1.10536 0.734784 1.00001 1 1.00001H13.757ZM17.485 0.100006L18.9 1.51601L9.708 10.708L8.296 10.711L8.294 9.29401L17.485 0.100006Z"
        style={styles.svg}
      />
    </Svg>
  )
}

const styles = StyleSheet.create({
  svg: {
    fill: colorStyles.text.linkBlue,
  },
})
