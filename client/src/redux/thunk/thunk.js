import {
  addTodoAC,
  changeStatusAC,
  deleteTodoAC,
  editTodoAC,
  getTodosAC,
} from "../actionCreator/todosAC";

export const getTodo = () => async (dispatch) => {
  try {
    const response = await fetch(process.env.REACT_APP_API_URL)
    const responseFromServ = await response.json()
    dispatch(getTodosAC(responseFromServ))
  } catch (error) {
    throw new Error(error.message)
  }
}

export const addTodo = (todo) => async (dispatch) => {
  try {
    const response = await fetch(process.env.REACT_APP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo }),
    })

    const responseFromServ = await response.json()
    dispatch(addTodoAC(responseFromServ))
  } catch (error) {
    throw new Error(error.message)
  }
}

export const changeStatusTodo = (id, status) => async (dispatch) => {
  try {
    const response = await fetch(process.env.REACT_APP_API_URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    })

    if (response.status === 200) {
      dispatch(changeStatusAC(id, status));
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export const editTodo = (id, value) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    })

    const responseFromServ = await response.json()
    dispatch(editTodoAC(responseFromServ))
  } catch (error) {
    throw new Error(error.message)
  }
}

export const removeTodo = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: "DELETE",
    })
    if (response.status === 200) {
      dispatch(deleteTodoAC(id));
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
