import * as React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../../src/routes'

const Navigation = () => (
  <div>
    {routes.map(( route, i ) => (
      <NavLink key={i} 
        activeStyle={{color: 'red'}} 
        to={route.path}>
        {route.name}
      </NavLink>
    ))}
  </div>
)

export default Navigation
