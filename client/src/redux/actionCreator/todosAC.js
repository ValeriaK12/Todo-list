import {
  ADD_TODO,
  CHANGE_STATUS,
  DELETE_TODO,
  GET_TODO,
  EDIT_TODO
} from "../types/todosTypes"

export const getTodosAC = (todos) => {
  return {
    type: GET_TODO,
    payload: todos
  }
}

export const addTodoAC = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}

export const deleteTodoAC = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const changeStatusAC = (id, status) => {
  return {
    type: CHANGE_STATUS,
    payload: {
      id: id,
      status: status
    }
  }
}

export const editTodoAC = (todo) => {
  return {
    type: EDIT_TODO,
    payload: todo
  }
}
