const actions = Object.freeze({
  INITIALIZE: 'emails/INITIALIZE',
  UPDATE: 'emails/UPDATE',
  DELETE: 'emails/DELETE',
})

function reducer(state, action) {
  const {
    type,
    payload: {
      id,
      ...rest
    },
  } = action

  switch (type) {
    case actions.INITIALIZE:
      return rest
    case actions.UPDATE:
      return {
        ...state,
        [id]: {
          ...state[id],
          ...rest
        },
      }
    case actions.DELETE:
      const newState = { ...state }
      delete newState[id]

      return newState
    default:
      return state
  }
}

export {
  actions,
  reducer,
}
