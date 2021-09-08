import * as React from 'react'
// import PropTypes from 'prop-types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { get } from '../../utils/fetch'

import { actions, reducer } from './reducer'

const contextDefault = {
  emails: [],
  createEmailAddress: () => {},
}

const EmailContext = React.createContext(contextDefault)

function EmailController(props) {
  const {
    children,
  } = props

  const [apiError, setApiError] = React.useState(null)
  const [emails, dispatch] = React.useReducer(reducer, {})

  const createEmailAddress = React.useCallback(
    () => {
      setApiError(null)

      const params = {
        f: 'get_email_address',
        ip: '127.0.0.1' , // TODO: research IP
        agent: 'firefox', // TODO: research agent
      }

      get('http://api.guerrillamail.com/ajax.php', params)
        .then(
          (data) => {
            dispatch({
              type: actions.UPDATE,
              payload: {
                id: data.sid_token,
                alias: data.alias,
                email_addr: data.email_addr,
                email_timestamp: data.email_timestamp,
              },
            })
          },
          (error) => {
            setApiError(error)
          }
        )
        .catch((error) => {
          console.error(error)
        })
    },
    []
  )

  const fetchEmailList = React.useCallback(
    (emailAddressId) => {
      setApiError(null)

      const params = {
        f: 'check_email',
        seq: 0,
      }

      get('http://api.guerrillamail.com/ajax.php', params)
        .then(
          (data) => {
            dispatch({
              type: actions.UPDATE,
              payload: {
                id: emailAddressId,
                messages: data.list,
              }
            })
          },
          (error) => {
            setApiError(error)
          }
        )
        .catch((error) => {
          console.error(error)
        })
    },
    []
  )

  React.useEffect(
    () => {
      AsyncStorage.getItem('emails', (error, result) => {
        if (error) {
          console.error(error)

          return
        }

        dispatch({
          type: actions.INITIALIZE,
          payload: result,
        })
      })
    },
    []
  )

  React.useEffect(
    () => {
      AsyncStorage.setItem('emails', emails, (error) => {
        if (error) {
          console.error(error)
        }
      })
    },
    [emails]
  )

  const provided = React.useMemo(
    () => ({
      apiError,
      emails,
      createEmailAddress,
      fetchEmailList,
    }),
    [
      apiError,
      emails,
      createEmailAddress,
      fetchEmailList,
    ]
  )

  return (
    <EmailContext.Provider value={provided}>
      {children}
    </EmailContext.Provider>
  )
}

EmailController.propTypes = {
  // children: PropTypes.node.isRequired,
}

export {
  EmailController as default,
  EmailContext,
}
