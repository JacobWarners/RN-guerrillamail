import * as React from 'react'
// import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faCoffee,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

import colors from 'src/vars/colors'

function CircleButton(props) {
  const {
    margin = 20,
    size = 30,
    color = colors.peachPuff,
    onPress = () => {},
    iconColor = colors.palatinatePurple,
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
        color: iconColor,
        fontSize,
      },
    }),
    [
      margin,
      size,
      color,
      iconColor,
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
      <FontAwesomeIcon style={styles.icon} icon={fontAwesomeIcon} />
    </TouchableOpacity>
  )
}

CircleButton.propTypes = {}

export {
  CircleButton as default,
}
