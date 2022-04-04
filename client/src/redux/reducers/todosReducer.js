import {
  ADD_TODO,
  CHANGE_STATUS,
  DELETE_TODO,
  GET_TODO,
  EDIT_TODO
} from "../types/todosTypes";

const todosReduser = (state = [], action) => {
  switch (action.type) {
    case GET_TODO:
      return [...action.payload]

    case ADD_TODO:
      return [
        ...state,
        action.payload
      ]

    case DELETE_TODO:
      return state.map(todo => {
        if (todo._id === action.payload) {
          return {
            ...state,
            todo: [state.todo?.filter((el) => el._id !== action.payload)],
          };
        }
        return todo
      })

    case CHANGE_STATUS:
      return state.map(todo => {
        if (todo._id === action.payload.id) {
          return {
            ...todo,
            status: !todo.status
          }
        }
        return todo
      })

    case EDIT_TODO:
      return state.map(todo => {
        if (todo._id === action.payload._id) {
          return {
            ...state,
            title: action.payload.title,
            status: action.payload.status,
            createdAt: action.payload.createdAt,
            _id: action.payload._id
          }
        }
        return todo
      })
    default:
      return state
  }
}
export default todosReduser
