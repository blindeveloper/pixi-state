import React from 'react'
import PropTypes from 'prop-types'

const Link = ({active, onClick, children}) => (
  <button onClick={onClick} disabled={active}>{children}</button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired
}

export default Link