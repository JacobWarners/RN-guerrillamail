import * as React from 'react'
// import PropTypes from 'prop-types'
import { useParams } from 'react-router-native'
import { View, Text } from 'react-native'

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
    <View>
      <Text>Inbox</Text>
    </View>
  )
}

Inbox.propTypes = {}

export {
  Inbox as default,
}
