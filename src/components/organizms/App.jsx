import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navigation from './Navigation.jsx'
import routes from '../../routes'

const App = () => (
  <div>
    <Navigation/>
    <Switch>
      {routes.map(( route, i ) => <Route key={i} {...route}/>)}
    </Switch>
  </div>
)

export default App