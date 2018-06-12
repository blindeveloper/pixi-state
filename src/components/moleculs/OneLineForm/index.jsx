import React from 'react'
import Input from '../../atoms/input/index.jsx'
import Button from '../../atoms/button/index.jsx'
import PropTypes from 'prop-types'

const OneLineForm = ({btnType, refType, submitFunction}) => {
  return (
    <form onSubmit={submitFunction}>
      <Input type='text' placeholder='type text here' refType={refType}/>
      <Button active={true} onClick={()=>{}} btnType={btnType}>+</Button>
    </form>
  )
}

OneLineForm.propTypes = {
  btnType: PropTypes.string.isRequired,
  refType: PropTypes.func.isRequired,
  submitFunction: PropTypes.func.isRequired
}

export default OneLineForm