import { StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

import { colorStyles } from './variables'

import Navigate from './components/Navigate'

export default function App() {

  

  return (
    <SafeAreaView style={styles.container}>
      <Navigate></Navigate>
    </SafeAreaView>
  )
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
