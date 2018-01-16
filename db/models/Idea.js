const monggose = require('mongoose')
const {IdeaSchema} = require('../Schema')


const Idea = mongoose.model('Idea', Ideaschema)

module.exports = Idea