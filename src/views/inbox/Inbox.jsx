import * as React from 'react'
// import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-native'
import { View, Text, StyleSheet } from 'react-native'

import { EmailContext } from '../../plugins/emails'

function Inbox(_props) {
  const params = useParams()
  const [ready, setReady] = React.useState(false)

  const { emails, fetchEmailList } = React.useContext(EmailContext)

  const emailAddress = emails[params.sid]

  React.useEffect(
    () => {
      if (!ready && emailAddress?.email_addr) {
        fetchEmailList(emailAddress?.id)
        setReady(true)
      }
    },
    [
      ready,
      emailAddress,
    ]
  )

  console.log(emailAddress)

  return (
    <View stlye={styles.container}>
      <Link to="/">
        <Text>Back</Text>
      </Link>
      <Text style={styles.header}>Inbox</Text>
      {emailAddress.messages?.map((email) => (
        <Text key={email.id}>{email.mail_from}</Text>
      ))}
    </View>
  )
}

Inbox.propTypes = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  header: {
    color: '#fd5150',
    fontSize: 40,
  }
})

export {
  Inbox as default,
}
