import React from 'react'
import PropTypes from 'prop-types'

const button = ({active, onClick, children, btnType}) => (
  <button type={btnType} onClick={onClick} disabled={!active}>{children}</button>
)

button.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired
}

export default button