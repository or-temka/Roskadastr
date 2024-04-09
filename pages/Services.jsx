import { StyleSheet, View, ScrollView, Text } from 'react-native'
import Page from './Page'
import gStyles from '../gStyles'
import ButtonForm from '../components/ButtonForm'
import { colorStyles } from '../variables'
import SplitLine from '../components/SplitLine'
import SplitLineText from '../components/SplitLineText'
import ServiceAddButtonSVG from '../components/svg/ServiceAddButtonSVG'
import OneService from '../components/OneService'

export default function Services({ navigation }) {
  return (
    <Page navigation={navigation}>
      <ScrollView>
        <View style={styles.services}>
          <Text style={gStyles.h4}>Услуги</Text>
          <SplitLine style={styles.services__splitLine} />
          <ButtonForm
            title="Добавить услугу"
            iconComponent={
              <ServiceAddButtonSVG active={true} width="18" height="18" />
            }
          />
          <SplitLineText text="Мои услуги" style={styles.services__splitLine} />
          <OneService
            serviceId={1}
            style={styles.services__oneService}
            navigation={navigation}
          />
          <OneService
            serviceId={2}
            style={styles.services__oneService}
            navigation={navigation}
          />
          <OneService
            serviceId={3}
            style={styles.services__oneService}
            navigation={navigation}
          />
          <OneService
            serviceId={4}
            style={styles.services__oneService}
            navigation={navigation}
          />
        </View>
        <View style={gStyles.emptyField}></View>
      </ScrollView>
    </Page>
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
