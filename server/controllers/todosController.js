const { Todos } = require('../model/todo')

const getTodos = async (req, res) => {
  try {
    const dataBase = await Todos.find()
    return res.json(dataBase)
  } catch (error) {
    res.sendStatus(500).end()
    throw new Error(error.message)
  }
}

const deleteTodo = async (req, res) => {
  try {
    await Todos.findByIdAndDelete(req.params.id)
    return res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500).end()
    throw new Error(error.message)
  }
}

const addTodo = async (req, res) => {
  try {
    const { todo } = req.body
    const newTodo = await Todos.create({
      title: todo,
    })
    return res.json(newTodo)
  } catch (error) {
    res.sendStatus(500).end()
    throw new Error(error.message)
  }
}

const editTodo = async (req, res) => {
  try {
    const { value } = req.body
    await Todos.findByIdAndUpdate(req.params.id, { title: value })
    const editTodo = await Todos.findById(req.params.id)
    return res.json(editTodo)
  } catch (error) {
    res.sendStatus(500).end()
    throw new Error(error.message)
  }
}

const changeStatusTodo = async (req, res) => {
  try {
    const { id, status } = req.body
    const myTodo = await Todos.findById(id)
    myTodo.status = !status
    await myTodo.save()
    return res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500).end()
    throw new Error(error.message)
  }
}

module.exports = {
  getTodos,
  addTodo,
  editTodo,
  changeStatusTodo,
  deleteTodo
}
