import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { get } from './src/utils/fetch'

import Router from './src/Router'
import EmailController from './src/plugins/emails/EmailController'

export default function App() {
  return (
    <View style={styles.container}>
      <EmailController>
        <Router />
      </EmailController>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    padding: 15,
  },
})
