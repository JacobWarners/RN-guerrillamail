import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0)

  const handleClick = React.useCallback(
    () => { setCount(count+1) },
    [count]
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
      <Text>This is a React Native App!</Text>
      <Button title="count" onPress={handleClick} />
      <Text>{`Clicked ${count} time(s).`}</Text>
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
});
