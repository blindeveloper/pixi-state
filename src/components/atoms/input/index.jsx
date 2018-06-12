import React from 'react'
import PropTypes from 'prop-types'

const Input = ({type, placeholder, refType}) => {
  return (
    <input type={type} placeholder={placeholder} ref={refType}/>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  refType: PropTypes.func.isRequired
}

export default Input