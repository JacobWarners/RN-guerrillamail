import * as React from 'react'
// import PropTypes from 'prop-types'
import { View, Button, StyleSheet } from 'react-native'

import Header from 'src/plugins/header'
import { EmailContext } from 'src/plugins/emails'
import AddressList from './AddressList'

function Home(_props) {
  const { createEmailAddress } = React.useContext(EmailContext)

  return (
    <View style={styles.container}>
      <Header>Home</Header>
      <AddressList />
      <Button title="Create Email Address" onPress={createEmailAddress} />
    </View>
  )
}

Home.propTypes = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    color: '#fd5150',
    fontSize: 40,
  }
})

export {
  Home as default,
}
