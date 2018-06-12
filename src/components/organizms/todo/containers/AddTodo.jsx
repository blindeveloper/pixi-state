import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import OneLineForm from '../../../moleculs/OneLineForm/index.jsx'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <OneLineForm btnType="submit" refType={node => input = node} submitFunction={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(addTodo(input.value))
      input.value = ''
    }}/>
  )
}

AddTodo.propTypes = {
  dispatch: propTypes.func.isRequired
}

export default connect()(AddTodo)