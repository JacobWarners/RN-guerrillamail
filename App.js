import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {get} from './utils/fetch';
export default function App() {

  const [email, setEmail] = React.useState('')
  const [messages, setMessages] = React.useState([])

  const handleNewEmailAddress = React.useCallback(
    () => {
      const params = {
        f: 'get_email_address',
        ip: '127.0.0.1' ,
        agent: 'firefox',
      }

      get('http://api.guerrillamail.com/ajax.php', params) 
        .then((data) => {
          setEmail(data.email_addr)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    []
  )

  const handleFetchEmails = React.useCallback(
    () => {
      const params = {
        f: 'check_email',
        seq: 0,
      }

      get('http://api.guerrillamail.com/ajax.php', params)
        .then((data) => {
          setMessages(data.list)
        })
    },
    []
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
      <Text style={styles.emailContainer} selectable>
        {`You have ${messages.length} Emails.`}
      </Text>
      {
        email
          ? (
            <Button title="Fetch Emails" onPress={handleFetchEmails} />
          )
          : (
            <Button title="Generate Email" onPress={handleNewEmailAddress} />
            )
      }
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
