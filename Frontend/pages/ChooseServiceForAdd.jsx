import { StyleSheet, View, ScrollView, Text } from 'react-native'
import gStyles from '../gStyles'
import { colorStyles } from '../variables'
import SplitLine from '../components/SplitLine'
import BackButton from '../components/BackButton'
import OneServiceType from '../components/OneServiceType'
import serviceTypes from '../data/serviceTypes'
import PageForUser from './PageForUser'

export default function ChooseServiceForAdd({ navigation }) {
  return (
    <PageForUser navigation={navigation}>
      <ScrollView>
        <View style={styles.chooseServiceForAdd}>
          <BackButton navigation={navigation} backNamePage="services" />
          <Text style={gStyles.h4}>Создание услуги</Text>
          <SplitLine style={styles.chooseServiceForAdd__splitLine} />
          <Text style={gStyles.text}>Выберите услугу из списка:</Text>
          <View style={styles.chooseServiceForAdd__services}>
            {serviceTypes.map((serviceType) => (
              <OneServiceType
                serviceTypeId={serviceType.id}
                key={serviceType.id}
                navigation={navigation}
              />
            ))}
          </View>
        </View>
        {serviceTypes.length < 7 && <View style={{ marginBottom: 90 }}></View>}
      </ScrollView>
    </PageForUser>
  )
}

const styles = StyleSheet.create({
  chooseServiceForAdd: {
    backgroundColor: colorStyles.backgroundFocus,
    borderRadius: 10,
    padding: 10,
  },
  chooseServiceForAdd__splitLine: {
    paddingHorizontal: 0,
  },
  chooseServiceForAdd__services: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginVertical: 10,
  },
})
