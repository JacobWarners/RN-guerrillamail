import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { get } from './src/utils/fetch'

import Router from './src/Router'
import EmailController from './src/plugins/emails/EmailController'

export default function App() {
  // const handleFetchEmails = React.useCallback(
  //   () => {
  //     const params = {
  //       f: 'check_email',
  //       seq: 0,
  //     }

  //     get('http://api.guerrillamail.com/ajax.php', params)
  //       .then((data) => {
  //         setMessages(data.list)
  //       })
  //   },
  //   []
  // )

/*

Two tabs at top

Tick box
if checked every 1  or 5  min send add time to API
if unchecked let expire
}

Tab 2: {
  get email from server from the box that exists
}
*/


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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailContainer:{
    padding: 8,
  }
})
