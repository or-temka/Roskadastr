import { StyleSheet, View, ScrollView, Text } from 'react-native'
import Page from './Page'
import gStyles from '../gStyles'
import ButtonForm from '../components/ButtonForm'
import { colorStyles } from '../variables'
import SplitLine from '../components/SplitLine'
import SplitLineText from '../components/SplitLineText'
import BackButton from '../components/BackButton'

export default function ServiceInfo({ navigation, route }) {
  const { serviceId } = route.params
  const service = services.find((service) => service.id === serviceId)

  return (
    <Page navigation={navigation}>
      <ScrollView>
        <View style={styles.serviceInfo}>
          <BackButton navigation={navigation} backNamePage="services" />
          <Text style={[gStyles.h4, styles.serviceInfo__label]}>
            {service.name}
          </Text>
          <SplitLineText
            text="Информация об услуге"
            style={styles.serviceInfo__splitLine}
          />
          <Text style={[styles.serviceInfo__textField, gStyles.lightText]}>
            <Text>Статус: </Text>
            <Text
              style={[
                styles.serviceInfo__status,
                service.status === 'active'
                  ? styles.serviceInfo__status_active
                  : service.status === 'done'
                  ? styles.serviceInfo__status_done
                  : styles.serviceInfo__status_cancel,
              ]}
            >
              {service.status === 'active'
                ? 'Активная'
                : service.status === 'done'
                ? 'Завершена'
                : 'Отменена'}
            </Text>
          </Text>
          <Text
            style={[
              styles.serviceInfo__textField,
              styles.serviceInfo__textValue,
            ]}
          >
            <Text style={gStyles.lightText}>Место проведения: </Text>
            <Text style={gStyles.text}>
              г. {service.city}, {service.branchAddress}
            </Text>
          </Text>
          <Text
            style={[
              styles.serviceInfo__textField,
              styles.serviceInfo__textValue,
            ]}
          >
            <Text style={gStyles.lightText}>Дата проведения: </Text>
            <Text style={gStyles.text}>{service.date}</Text>
          </Text>
          <Text style={[styles.serviceInfo__textField, gStyles.lightText]}>
            Дата создания: {service.dateCreate}
          </Text>
          <SplitLineText
            text="Данные от сотрудников"
            style={styles.serviceInfo__splitLine}
          />
          {service.toHave && (
            <Text
              style={[
                styles.serviceInfo__textField,
                styles.serviceInfo__textValue,
              ]}
            >
              <Text style={gStyles.lightText}>При себе иметь: </Text>
              <Text style={gStyles.text}>{service.toHave}</Text>
            </Text>
          )}
          {service.cabinet && (
            <Text
              style={[
                styles.serviceInfo__textField,
                styles.serviceInfo__textValue,
              ]}
            >
              <Text style={gStyles.lightText}>Кабинет: </Text>
              <Text style={gStyles.text}>{service.cabinet}</Text>
            </Text>
          )}
          {service.howToGo && (
            <Text
              style={[
                styles.serviceInfo__textField,
                styles.serviceInfo__textValue,
              ]}
            >
              <Text style={gStyles.lightText}>Как добраться: </Text>
              <Text style={gStyles.text}>{service.howToGo}</Text>
            </Text>
          )}
          <SplitLine style={styles.serviceInfo__splitLine} />
          <ButtonForm
            title="Помощь по услуге"
            style={styles.serviceInfo__buttonForm}
          />
          <ButtonForm
            title="Переписка с ведомством"
            style={styles.serviceInfo__buttonForm}
          />
          {service.status === 'active' && (
            <ButtonForm
              textColor={colorStyles.text.error}
              title="Отмена"
              style={styles.serviceInfo__buttonForm}
            />
          )}
        </View>
        <View style={{ marginBottom: 90 }}></View>
      </ScrollView>
    </Page>
  )
}

const styles = StyleSheet.create({
  serviceInfo: {
    backgroundColor: colorStyles.backgroundFocus,
    borderRadius: 10,
    padding: 10,
  },
  serviceInfo__label: {
    color: colorStyles.text.linkBlue,
  },
  serviceInfo__splitLine: {
    paddingHorizontal: 0,
  },
  serviceInfo__status: {},
  serviceInfo__status_active: {
    color: colorStyles.text.succes,
  },
  serviceInfo__status_done: { color: colorStyles.text.text },
  serviceInfo__status_cancel: { color: colorStyles.text.error },
  serviceInfo__textField: {
    marginVertical: 5,
  },
  serviceInfo__buttonForm: {
    paddingHorizontal: 5,
  },
})
