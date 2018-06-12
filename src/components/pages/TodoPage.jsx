import React from 'react'
import Footer from '../organizms/todo/Footer.jsx'
import AddTodo from '../organizms/todo/containers/AddTodo.jsx'
import VisibleTodoList from '../organizms/todo/containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App