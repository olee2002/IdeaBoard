const mongoose = require('mongoose')
const { IdeaSchema } = require('../Schema')

const Idea = mongoose.model('Idea', IdeaSchema)

module.exports = Idea