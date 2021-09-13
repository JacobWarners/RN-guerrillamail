import * as React from 'react'
// import PropTypes from 'prop-types'
import { View, Button, StyleSheet } from 'react-native'

import { EmailContext } from 'src/plugins/emails'
import Header from 'src/plugins/header'
import { TextButton } from 'src/plugins/buttons'

import AddressList from './AddressList'

function Home(_props) {
  const { createEmailAddress } = React.useContext(EmailContext)

  return (
    <View style={styles.container}>
      <Header>Home</Header>
      <AddressList />
      <TextButton onPress={createEmailAddress}>
        Create Email Address
      </TextButton>
    </View>
  )
}

Home.propTypes = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
})

export {
  Home as default,
}
