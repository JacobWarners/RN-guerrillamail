import * as React from 'react'
// import PropTypes from 'prop-types'
import { NativeRouter, Route } from 'react-router-native'

import HomeView from './views/home'
import InboxView from './views/inbox'

function Router(_props) {
  return (
    <NativeRouter>
      <Route exact path="/">
        <HomeView />
      </Route>
      <Route exact path="/inbox/:sid">
        <InboxView />
      </Route>
    </NativeRouter>
  )
}

Router.propTypes = {}

export {
  Router as default,
}
