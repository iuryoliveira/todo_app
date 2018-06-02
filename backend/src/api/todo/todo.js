const restful = require('node-restful')
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true},
    done: { type: Boolean, require: true},
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.module('Todo', todoSchema)
