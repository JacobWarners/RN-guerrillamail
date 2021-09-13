import * as React from 'react'
// import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-native'
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { CircleButton } from 'src/plugins/buttons'

import { EmailContext } from 'src/plugins/emails'
import Header from 'src/plugins/header'

function Inbox(_props) {
  const history = useHistory()
  const params = useParams()
  const [ready, setReady] = React.useState(false)

  const { emails, fetchEmailList } = React.useContext(EmailContext)

  const emailAddress = emails[params.sid]

  React.useEffect(
    () => {
      if (!ready && emailAddress?.email_addr) {
        fetchEmailList(emailAddress?.id, 0)
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

  const renderItems = React.useCallback(
    ({ item }) => (
      <TouchableOpacity>
        <Text>{item.mail_from}</Text>
      </TouchableOpacity>
    ),
    []
  )
  console.log(emailAddress.messages)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CircleButton
          onPress={handleNavigateToHome}
          icon="arrowLeft"
        />
        <Header>Inbox</Header>
      </View>
      <FlatList
        data={emailAddress.messages}
        renderItems={renderItems}
        keyExtractor={item => item.mail_id.toString()}
      />
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
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export {
  Inbox as default,
}
