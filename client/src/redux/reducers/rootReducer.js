import { combineReducers } from 'redux';

import todosReduser from './todosReducer';

const rootReducer = combineReducers({
  todos: todosReduser
})

export default rootReducer
