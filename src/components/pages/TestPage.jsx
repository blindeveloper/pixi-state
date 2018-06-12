import React from 'react'
import resource from '../organizms/todo/resource/api'
import PixiApp from '../organizms/pixi'

const TestPage = () => {
  PixiApp()
  return (<h2>Test page</h2>)
}

resource.getData().then(data => {
  console.log('data:',data)
}, err => { throw new Error(err) })

export default TestPage