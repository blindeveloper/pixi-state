import { combineReducers } from 'redux'
import todos from './components/organizms/todo/reducers/todos'
import visibilityFilter from './components/organizms/todo/reducers/visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})