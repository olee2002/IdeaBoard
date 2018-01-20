const express = require('express')
const router = express.Router()
const Idea = require('../db/models/Idea')

router.get('/', async (req, res) => {
    try {
        const ideas = await Idea.find({})
        res.json(ideas)
    } catch (error) {
        console.log(error)
    }
})

// router.post('/', async (req, res) => {
//     try {
//         const newIdea = await Idea.create({})
//         res.json(newIdea)
//     } catch (error) {
//         console.log(error)
//     }
// })
// router.patch('/:id', (res, req) => {
//     const ideaId = req.params.id
//     Idea.findByIdAndUpdate(ideaId, req.body)
//         .then((updatedIdea) => {
//             res.json(updatedIdea)
//         })
// })


