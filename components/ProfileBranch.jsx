import { Image, Text, View, StyleSheet } from 'react-native'
import { colorStyles } from '../variables'
import gStyles from '../gStyles'

export default function ProfileBranch({ style }) {
  return (
    <View style={[styles.profileBranch, style]}>
      <Text style={gStyles.text}>Ближайший филиал:</Text>
      <View style={styles.profileBranch__container}>
        <Image
          style={styles.profileBranch__image}
          source={require('../assets/img/branchs/XXL_height.webp')}
        />
        <View style={styles.profileBranch__info}>
          <Text style={gStyles.paragraph}>г. Сыктывкар</Text>
          <Text style={gStyles.smallLightText}>ул. Оплеснина, д.7</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileBranch: {
    backgroundColor: colorStyles.backgroundFocus,
    borderRadius: 10,
    padding: 10,
    paddingBottom: 15,
  },
  profileBranch__container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  profileBranch__image: {
    height: 62,
    width: 89,
    borderRadius: 3,
  },
  profileBranch__info: {},
})
