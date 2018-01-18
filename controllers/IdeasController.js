const express = require('express')
const router = express.Router()
const Idea = require('../db/models/Idea')

router.get('/', (req, res) => {
    Idea.find({}).then((ideas) => {
        res.json(ideas)
    })
})

router.patch('/:id',(res,req)=>{
    const ideaId = req.params.id
    Idea.findByIdAndUpdate(ideaId, req.body)
    .then((updatedIdea)=>{
            res.json(updatedIdea)
    })
})


module.exports = router