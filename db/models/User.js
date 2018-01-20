const mongoose = require('mongoose')
const { UserSchema } = require('../Schema')

const User = mongoose.model('User', UserSchema)

module.exports = User