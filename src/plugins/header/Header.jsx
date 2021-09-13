import * as React from 'react'
// import PropTypes from 'prop-types'
import { Text, StyleSheet } from 'react-native'

import colors from 'src/vars/colors'

function Header(props) {
  const {
    children,
  } = props

  return (
    <Text style={styles.header}>
      {children}
    </Text>
  )
}

Header.propTypes = {}

const styles = StyleSheet.create({
  header: {
    color: colors.paradisePink,
    fontSize: 40,
  }
})

export {
  Header as default,
}
