import * as React from 'react'
// import PropTypes from 'prop-types'
import { useHistory } from 'react-router-native'
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { EmailContext } from 'src/plugins/emails'
import colors from 'src/vars/colors'

function AddressList(_props) {
  const history = useHistory()

  const { emails } = React.useContext(EmailContext)

  const handlePress = React.useCallback(
    (emailId) => {
      history.push(`/inbox/${emailId}`)
    },
    [history]
  )

  const renderItem = React.useCallback(
    ({ item }) => (
      <TouchableOpacity
        style={styles.addressContainer}
        onPress={() => { handlePress(item.id) }}
      >
        <Text style={styles.address}>{item.email_addr}</Text>
      </TouchableOpacity>
    ),
    [handlePress]
  )

  const tableData = React.useMemo(
    () => Object.values(emails),
    [emails]
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={tableData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

AddressList.propTypes = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  addressContainer: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.palatinatePurple,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  address: {
    fontSize: 15,
    borderRadius: 10,
    color: colors.peachPuff,
    backgroundColor: colors.outrageousOrange,
    textAlign: 'center',
    padding: 10,
  }
})

export {
  AddressList as default,
}
