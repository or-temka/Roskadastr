import { StyleSheet, View, FlatList, Text } from 'react-native'
import Page from './Page'

export default function Vacancy({ navigation }) {
  return (
    <Page navigation={navigation}>
      <Text>Привет страница с вакансиями</Text>
    </Page>
  )
}
