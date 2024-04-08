import { StatusBar } from 'expo-status-bar'
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native'
import * as Font from 'expo-font'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { colorStyles } from './variables'
import News from './components/News'
import DownMenu from './components/DownMenu'

import Navigate from './components/Navigate'

export default function App() {
  const [font, setFont] = useState(false)
  useEffect(() => {
    Font.loadAsync({
      'Noto-Sans': require('./assets/fonts/Noto-Sans/NotoSans-VariableFont_wdth,wght.ttf'),
    }).then(() => setFont(true))
  }, [])

  if (font) {
    return (
      <SafeAreaView style={styles.container}>
        <Navigate></Navigate>
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={styles.activityIndicator}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorStyles.background,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
