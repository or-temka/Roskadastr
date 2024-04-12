import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { colorStyles } from '../variables'
import gStyles from '../gStyles'
import services from '../data/services'

export default function OneService({ navigation, style, service }) {
  function pressServiceHandler() {
    navigation.navigate('serviceInfo', { serviceId: service._id })
  }

  return (
    <TouchableOpacity
      style={[styles.oneService, style]}
      onPress={pressServiceHandler}
    >
      <View style={styles.oneService__header}>
        <View style={styles.oneService__activity}>
          <View
            style={[
              styles.oneService__activityCircle,
              service.status === 'active'
                ? ''
                : service.status === 'done'
                ? styles.oneService__activityCircle_done
                : styles.oneService__activityCircle_cancel,
            ]}
          ></View>
          <Text
            style={[
              gStyles.smallText,
              styles.oneService__activityText,
              service.status === 'active'
                ? ''
                : service.status === 'done'
                ? styles.oneService__activityText_done
                : styles.oneService__activityText_cancel,
            ]}
          >
            {service.status === 'active'
              ? 'Активная'
              : service.status === 'done'
              ? 'Завершена'
              : 'Отменена'}
          </Text>
        </View>
        <View style={styles.oneService__smallData}>
          <Text style={gStyles.smallLightText}>
            {service.date + '    каб. ' + service.cabinet}
          </Text>
        </View>
      </View>
      <View style={styles.oneService__content}>
        <Text style={[gStyles.text, styles.oneService__label]}>
          {service.name}
        </Text>
        <Text style={[gStyles.smallLightText, styles.oneService__address]}>
          {service.city + ', ' + service.branchAddress}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  oneService: {
    backgroundColor: colorStyles.choice,
    paddingHorizontal: 10,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  oneService__header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  oneService__activity: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,
  },
  oneService__activityCircle: {
    width: 10,
    height: 10,
    backgroundColor: colorStyles.text.succes,
    borderRadius: 10,
  },
  oneService__activityCircle_done: {
    backgroundColor: colorStyles.text.lightText,
  },
  oneService__activityCircle_cancel: {
    backgroundColor: colorStyles.text.error,
  },
  oneService__activityText: {
    color: colorStyles.text.succes,
  },
  oneService__activityText_done: {
    color: colorStyles.text.lightText,
  },
  oneService__activityText_cancel: {
    color: colorStyles.text.error,
  },
  oneService__smallData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  oneService__content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  oneService__label: {
    color: colorStyles.text.linkBlue,
  },
})
