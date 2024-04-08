import { StyleSheet, View, FlatList, Text } from 'react-native'
import Page from './Page'

export default function Profile({ navigation }) {
  return (
    <Page navigation={navigation}>
      <Text>Привет страница с профилем</Text>
    </Page>
  )
}

const styles = StyleSheet.create({})