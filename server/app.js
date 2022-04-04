require('dotenv').config()
const express = require('express')
const { connect } = require('mongoose');
const cors = require('cors')

const todosRouter = require('./routes/todosRouter');

const app = express()
const PORT = process.env.PORT ?? 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/', todosRouter);

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`)
  connect(process.env.DATA_BASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => {
    console.log('Connection to databse is successful.');
  });
})
