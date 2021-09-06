import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {get} from './utils/fetch';
export default function App() {

  const [email, setEmail] = React.useState('')
  const handleClick = React.useCallback(
    () => {
      const params = {
        f: 'get_email_address',
        ip: '127.0.0.1' ,
        agent: 'firefox',
      }
      get('http://api.guerrillamail.com/ajax.php', params) 
      .then((Data) => {
        setEmail(Data.email_addr)
      })
    },
  )
  const handleCopy = React.useCallback(
    () => {
      Clipboard.setString(email)
    }
  )

/*

Two tabs at top

TAB 1 :{

Text
copiable field
Email from api comes in here

button
This button reaches out to Gurilla API and gets email box 

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
      <Text style={styles.emailContainer} selectable>{email}</Text>
      <Button title="Get Email" onPress={handleClick} />
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
});
