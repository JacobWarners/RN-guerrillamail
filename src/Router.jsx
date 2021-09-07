import * as React from 'react'
// import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'

function Router(_props) {
  return (
    <NativeRouter>
      <Route exact path="/">
        <View>
          <Text>Home Route</Text>
          <Link to="/other">
            <Text>Go Other</Text>
          </Link>
        </View>
      </Route>
      <Route exact path="/other">
        <View>
          <Text>Other Route</Text>
          <Link to="/">
            <Text>
              Go Home
            </Text>
          </Link>
        </View>
      </Route>
    </NativeRouter>
  )
}

Router.propTypes = {}

export {
  Router as default,
}
