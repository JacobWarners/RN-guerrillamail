import * as React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-native'
import { View, Text, Button, StyleSheet } from 'react-native'

import { EmailContext } from '../../plugins/emails'

function Home(_props) {
  const { emails, createEmailAddress } = React.useContext(EmailContext)

  return (
    <View>
      <Text style={styles.header}>Home</Text>
      {
        Object.values(emails).map((email) => (
          <Link key={email.id} to={`/inbox/${email.id}`}>
            <Text>{email.email_addr}</Text>
          </Link>
        ))
      }
      <Button title="Create Email Address" onPress={createEmailAddress} />
    </View>
  )
}

Home.propTypes = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: '#fd5150',
    fontSize: 40,
  }
})

export {
  Home as default,
}
