import * as React from 'react'
// import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faCoffee,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

function CircleButton(props) {
  const {
    margin = 20,
    size = 30,
    color = '#bebebe',
    onPress = () => {},
    textColor = '#fff',
    fontSize = 20,
    icon,
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
      icon: {
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

  const fontAwesomeIcon = React.useMemo(
    () => {
      switch(icon) {
        case 'arrowLeft':
          return faArrowLeft
        case 'arrowRight':
          return faArrowRight
        default:
          return faCoffee
      }
    },
    [icon]
  )

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <FontAwesomeIcon icon={fontAwesomeIcon} />
    </TouchableOpacity>
  )
}

CircleButton.propTypes = {}

export {
  CircleButton as default,
}
