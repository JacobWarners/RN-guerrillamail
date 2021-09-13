import * as React from 'react'
// import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-native'
import { View, Text, StyleSheet } from 'react-native'
import { CircleButton } from 'src/plugins/buttons'

import { EmailContext } from 'src/plugins/emails'

function Inbox(_props) {
  const history = useHistory()
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

  const handleNavigateToHome = React.useCallback(
    () => {
      history.push('/')
    },
    [history]
  )

  return (
    <View stlye={styles.container}>
      <CircleButton
        onPress={handleNavigateToHome}
        icon="arrowLeft"
        color="transparent"
        iconColor="#000"
      />
      <Text style={styles.header}>Inbox</Text>
      {emailAddress.messages?.map((message) => (
        <Text key={message.mail_id}>{message.mail_from}</Text>
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
