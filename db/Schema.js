const mongoose = require('mongoose')
const Schema = mongoose.Schema


const IdeaSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false
        },
    },
    {
        timestamps: {}
    }
)

module.exports = {
    IdeaSchema
}