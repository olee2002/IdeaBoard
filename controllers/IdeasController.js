const express = require('express')
const router = express.Router()
const Idea = require('../db/models/Idea')

router.get('/', (request, response) => {
    Idea.find({}).then((ideas) => {
        response.json(ideas)
    })
})

module.exports = router