import * as React from 'react'
// import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

function CircleButton(props) {
  const {
    margin = 20,
    size = 30,
    color = '#bebebe',
    onPress = () => {},
    textColor = '#fff',
    fontSize = 20,
    text = '',
  } = props

  const styles = React.useMemo(
    () => ({
      button: {
        margin,
        height: size,
        width: size,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: size * 2,
      },
      text: {
        color: textColor,
        fontSize,
      },
    }),
    [
      margin,
      size,
      color,
      textColor,
      fontSize,
    ]
  )

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

CircleButton.propTypes = {}

export {
  CircleButton as default,
}
