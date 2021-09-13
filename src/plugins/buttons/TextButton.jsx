import * as React from 'react'
// import PropTypes from 'prop-types'
import { Pressable, Text, StyleSheet } from 'react-native'
import colors from '../../vars/colors'

function TextButton(props) {
  const {
    children = '',
    onPress = () => {},
  } = props

  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

TextButton.propTypes = {}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.outrageousOrange,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    color: colors.peachPuff,
  }
})

export {
  TextButton as default,
}
