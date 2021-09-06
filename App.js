import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {get} from './utils/fetch';
export default function App() {

  const [email, setEmail] = React.useState('')
  const [messages, getMessages] = React.useState([])
  const handleClick = React.useCallback(
    () => {
      const params = {
        // this is an if statement in JS cause it's stupid, email? is if there is an email in this case F is function from the API
        f: email ? 'get_email_address':'check_email',
        ip: '127.0.0.1' ,
        agent: 'firefox',
      }
      get('http://api.guerrillamail.com/ajax.php', params) 
      .then((Data) => {
        setEmail(Data.email_addr)
        getMessages(Data.check_email)
      })
      .catch((error) => {
        console.log(error)
      })
    },
  )

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
      <Text style={styles.emailContainer} selectable>{email}</Text>
      <Text style={styles.emailContainer} selectable>{messages}</Text>
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
