import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0)

  const handleClick = React.useCallback(
    () => { setCount(count+1) },
    [count]
  )

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
