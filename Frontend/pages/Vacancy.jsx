import { StyleSheet, View, Text, ScrollView, Linking } from 'react-native'
import Page from './Page'
import gStyles from '../gStyles'
import { useState } from 'react'
import OneVacancy from '../components/OneVacancy'
import vacancysData from '../data/vacancysData'
import { colorStyles } from '../variables'

export default function Vacancy({ navigation }) {
  const [vacancy, setVacancy] = useState(vacancysData)

  return (
    <Page navigation={navigation}>
      <ScrollView>
        <View style={styles.vacancys}>
          <Text style={[gStyles.h4, styles.vacancys__label]}>Вакансии</Text>
          {vacancy.map((item) => {
            return (
              <View style={styles.vacancys__item} key={item.key}>
                <OneVacancy
                  name={item.name}
                  price={item.price}
                  experience={item.experience}
                  employment={item.employment}
                  onPress={() =>
                    Linking.openURL('https://yaroslavl.hh.ru/employer/2806402')
                  }
                />
              </View>
            )
          })}
        </View>
      </ScrollView>
    </Page>
  )
}

const styles = StyleSheet.create({
  vacancys: {
    padding: 10,
    backgroundColor: colorStyles.backgroundFocus,
    borderRadius: 10,
  },
  vacancys__label: {
    marginBottom: 10,
  },
  vacancys__item: {
    marginVertical: 10,
  },
})
