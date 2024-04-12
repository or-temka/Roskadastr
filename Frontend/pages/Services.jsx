import { StyleSheet, View, ScrollView, Text } from 'react-native'
import gStyles from '../gStyles'
import ButtonForm from '../components/ButtonForm'
import { colorStyles } from '../variables'
import SplitLine from '../components/SplitLine'
import SplitLineText from '../components/SplitLineText'
import ServiceAddButtonSVG from '../components/svg/ServiceAddButtonSVG'
import OneService from '../components/OneService'
import services from '../data/services'
import PageForUser from './PageForUser'

export default function Services({ navigation }) {
  return (
    <PageForUser navigation={navigation}>
      <ScrollView>
        <View style={styles.services}>
          <Text style={gStyles.h4}>Услуги</Text>
          <SplitLine style={styles.services__splitLine} />
          <ButtonForm
            title="Добавить услугу"
            iconComponent={
              <ServiceAddButtonSVG active={true} width="18" height="18" />
            }
            navigation={navigation}
            onPress={() => navigation.navigate('chooseServiceForAdd')}
          />
          <SplitLineText text="Мои услуги" style={styles.services__splitLine} />
          {services.map((service) => (
            <OneService
              serviceId={service.id}
              style={styles.services__oneService}
              navigation={navigation}
              key={service.id}
            />
          ))}
        </View>
        <View style={gStyles.emptyField}></View>
      </ScrollView>
    </PageForUser>
  )
}

const styles = StyleSheet.create({
  services: {
    backgroundColor: colorStyles.backgroundFocus,
    borderRadius: 10,
    padding: 10,
  },
  services__splitLine: {
    paddingHorizontal: 0,
  },
  services__oneService: {
    marginVertical: 8,
  },
})
