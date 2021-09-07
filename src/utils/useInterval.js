import React from 'react'

function useInterval(callback, delay) {
  const savedCallback = React.useRef()
  const interval = React.useRef()

  React.useEffect(
    () => {
      savedCallback.current = callback
    },
    [callback]
  )

  const startInterval = React.useCallback(
    (cb, d) => {
      if (!interval.current) {
        interval.current = setInterval(cb, d)
      }
    },
    []
  )

  const executeInterval = React.useCallback(
    () => {
      savedCallback.current()
    },
    []
  )

  const cancelInterval = React.useCallback(
    () => {
      if (interval.current) {
        clearInterval(interval.current)

        interval.current = null
      }
    },
    []
  )

  React.useEffect(
    () => {
      if (Number(delay)) {
        startInterval(executeInterval, delay)
      }

      return cancelInterval
    },
    [
      startInterval,
      executeInterval,
      cancelInterval,
      delay,
    ]
  )

  return ({
    start: startInterval,
    execute: executeInterval,
    cancel: cancelInterval,
  })
}

export {
  useInterval as default,
}

Message @Ikohn