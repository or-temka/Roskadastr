import { StyleSheet, View, FlatList, Text } from 'react-native'
import Page from './Page'
import gStyles from '../gStyles'
import { colorStyles } from '../variables'
import { ScrollView } from 'react-native'

export default function AboutUs({ navigation }) {
  return (
    <Page navigation={navigation}>
      <ScrollView>
        <View style={styles.aboutUs}>
          <Text style={gStyles.h1}>О нас</Text>
          <View style={styles.aboutUs__textContainer}>
            <Text style={gStyles.h6}>
              Филлиал ППК “Роскадастр” по Республике Коми
            </Text>
            <Text style={gStyles.paragraph}>
              ППК “Роскадастр” работает в сфере кадастрового учёта, регистрация
              прав собственности и сделок с недвижимостью, оказывает связанные с
              этим услуги населению и бизнесу в каждом регионе России.
            </Text>
          </View>
          <View style={styles.aboutUs__textContainer}>
            <Text style={gStyles.h6}>Адреса</Text>
            <Text style={gStyles.paragraph}>
              г. Сыктывкар, ул. Оплеснина, д. 7
            </Text>
            <Text style={gStyles.paragraph}>
              г. Сыктывкар, ул. Покровский бульвар, д. 6
            </Text>
          </View>
          <View style={styles.aboutUs__textContainer}>
            <Text style={gStyles.h6}>График работы</Text>
            <View style={gStyles.mergeText}>
              <Text style={gStyles.paragraphUnderline}>Понедельник:</Text>
              <Text style={gStyles.paragraph}>8:30 - 17:00</Text>
            </View>
            <View style={gStyles.mergeText}>
              <Text style={gStyles.paragraphUnderline}>Вторник:</Text>
              <Text style={gStyles.paragraph}>8:30 - 17:00</Text>
            </View>
            <View style={gStyles.mergeText}>
              <Text style={gStyles.paragraphUnderline}>Среда:</Text>
              <Text style={gStyles.paragraph}>8:30 - 17:00</Text>
            </View>
            <View style={gStyles.mergeText}>
              <Text style={gStyles.paragraphUnderline}>Четверг:</Text>
              <Text style={gStyles.paragraph}>8:30 - 17:00</Text>
            </View>
            <View style={gStyles.mergeText}>
              <Text style={gStyles.paragraphUnderline}>Пятница:</Text>
              <Text style={gStyles.paragraph}>8:30 - 17:00</Text>
            </View>
            <View style={gStyles.mergeText}>
              <Text style={gStyles.paragraphUnderline}>Суббота:</Text>
              <Text style={gStyles.paragraph}>закрыто</Text>
            </View>
            <View style={gStyles.mergeText}>
              <Text style={gStyles.paragraphUnderline}>Воскресенье:</Text>
              <Text style={gStyles.paragraph}>закрыто</Text>
            </View>
            <Text style={gStyles.lightParagraphUnderline}>
              Перерыв: 13:00 - 14:00
            </Text>
          </View>
          <View style={styles.aboutUs__textContainer}>
            <Text style={gStyles.h6}>Контакты</Text>
            <View style={gStyles.mergeText}>
              <Text style={gStyles.lightParagraph}>Телефон (общий):</Text>
              <Text style={gStyles.paragraph}>+7 (821) 240-95-20</Text>
            </View>
            <View style={gStyles.mergeText}>
              <Text style={gStyles.lightParagraph}>Телефон (филиала):</Text>
              <Text style={gStyles.paragraph}>+7 (912) 151-01-18</Text>
            </View>
            <View style={gStyles.mergeText}>
              <Text style={gStyles.lightParagraph}>Почта (филиала):</Text>
              <Text style={gStyles.paragraph}>rostehinventarizaciya11rus</Text>
            </View>
          </View>
        </View>
        <View style={gStyles.emptyField}></View>
      </ScrollView>
    </Page>
  )
}

const styles = StyleSheet.create({
  aboutUs: {
    padding: 10,
    backgroundColor: colorStyles.backgroundFocus,
    borderRadius: 10,
  },
  aboutUs__textContainer: {
    marginVertical: 7,
  },
})
