const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IdeaSchema = new Schema(
    {
        title: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        }
    },
    {
        timestamps: {}
    }
)
const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: true
        },
        ideas:[IdeaSchema]
    },
    {
        timestamps: {}
    }
)
module.exports = {
    IdeaSchema, UserSchema
}