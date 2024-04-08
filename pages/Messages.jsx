import { StyleSheet, View, FlatList, Text } from 'react-native'
import Page from './Page'

export default function Messages({ navigation }) {
  return (
    <Page navigation={navigation}>
      <Text>Привет страница с сообщениями</Text>
    </Page>
  )
}

const styles = StyleSheet.create({})