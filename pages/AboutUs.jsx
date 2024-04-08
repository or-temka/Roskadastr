import { StyleSheet, View, FlatList, Text } from 'react-native'
import Page from './Page'

export default function AboutUs({ navigation }) {
  return (
    <Page navigation={navigation}>
      <Text>Привет страница с информацией о нас</Text>
    </Page>
  )
}