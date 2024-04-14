import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native'
import gStyles from '../gStyles'
import ButtonForm from '../components/ButtonForm'
import { colorStyles } from '../variables'
import SplitLine from '../components/SplitLine'
import SplitLineText from '../components/SplitLineText'
import ServiceAddButtonSVG from '../components/svg/ServiceAddButtonSVG'
import OneService from '../components/OneService'
import PageForUser from './PageForUser'
import { useEffect, useState } from 'react'
import axios from '../axios'
import { getUserToken } from '../utils/userTokenStorage'

export default function Services({ navigation }) {
  const [isLoading, setIsLoading] = useState(true)

  const [services, setServices] = useState()

  useEffect(() => {
    const fetchUserServices = async () => {
      try {
        const { data } = await axios.get('/service', {
          headers: {
            Authorization: await getUserToken(),
          },
        })

        const sortedData = [...data].sort((a, b) =>
          a.updatedAt < b.updatedAt ? 1 : -1
        )
        setServices(sortedData)

        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUserServices()
  }, [])

  if (isLoading) {
    return (
      <PageForUser navigation={navigation}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      </PageForUser>
    )
  }

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
          {services.length ? (
            services.map((service) => (
              <OneService
                service={service}
                style={styles.services__oneService}
                navigation={navigation}
                key={service._id}
              />
            ))
          ) : (
            <Text style={[gStyles.lightParagraph, styles.services__emptyText]}>
              Пока что вы не добавили ни одной услуги
            </Text>
          )}
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
  services__emptyText: {
    textAlign: 'center',
    marginHorizontal: 40,
    marginVertical: 20,
  },
})
