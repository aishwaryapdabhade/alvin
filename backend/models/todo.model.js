const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    Todo_description: {
        type: String
    },
    Todo_responsible: {
        type: String
    },
    Todo_priority: {
        type: String
    },
    Todo_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Todo', Todo);