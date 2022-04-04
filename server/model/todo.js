const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
  title: String,
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = {
  Todos: model('Todos', todoSchema)
}
