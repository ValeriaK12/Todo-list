require('dotenv').config()
const todosRouter = require('express').Router();
const {
  getTodos,
  addTodo,
  editTodo,
  changeStatusTodo,
  deleteTodo
} = require('../controllers/todosController')

todosRouter.route(process.env.API_URL)
  .get(getTodos)
  .post(addTodo)
  .patch(changeStatusTodo)

todosRouter.route(`${process.env.API_URL}/:id`)
  .patch(editTodo)
  .delete(deleteTodo)

module.exports = todosRouter
