import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { colorStyles } from '../variables'
import gStyles from '../gStyles'
import serviceTypes from '../data/serviceTypes'

export default function OneServiceType({ navigation, style, serviceTypeId }) {
  function pressServiceHandler() {
    navigation.navigate('serviceAdd', { serviceTypeId })
  }

  const serviceType = serviceTypes.find(
    (serviceType) => serviceType.id === serviceTypeId
  )

  return (
    <TouchableOpacity
      style={[styles.oneServiceType, style]}
      onPress={pressServiceHandler}
    >
      <View style={styles.oneServiceType__content}>
        <Text style={[gStyles.h6, styles.oneServiceType__name]}>
          {serviceType.name}
        </Text>
        <Text style={[gStyles.paragraph, styles.oneServiceType__price]}>
          от {serviceType.price.from} ₽ до {serviceType.price.to} ₽
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  oneServiceType: {
    backgroundColor: colorStyles.choice,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  oneServiceType__content: {},
  oneServiceType__name: {
    color: colorStyles.text.linkBlue,
  },
  oneServiceType__price: {},
})
