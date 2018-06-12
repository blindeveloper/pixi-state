import React from 'react'
import FilterLink from '../todo/containers/FilterLink'
import {VisibilityFilters} from '../todo/actions'

const Footer = () => (
  <div>
    SHOW: 
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>ACTIVE</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>COMPLETED</FilterLink>
  </div>
)

export default Footer
