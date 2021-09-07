import * as React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-native'
import { View, Text, Button } from 'react-native'

import { EmailContext } from '../../plugins/emails'

function Home(_props) {
  const { emails, createEmailAddress } = React.useContext(EmailContext)

  console.log(emails)

  return (
    <View>
      {
        Object.values(emails).map((email) => (
          <Link to={`/inbox/${email.id}`}>
            <Text>{email.email_addr}</Text>
          </Link>
        ))
      }
      <Text>Home</Text>
      <Button title="Create Email" onPress={createEmailAddress} />
    </View>
  )
}

Home.propTypes = {}

export {
  Home as default,
}
