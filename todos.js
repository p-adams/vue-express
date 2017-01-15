var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/todos')
var Schema = mongoose.Schema

const todoSchema = Schema({
    todo: String,
    completed: Boolean
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo