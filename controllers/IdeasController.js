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

router.post('/', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        const newIdea = new Idea({})
        user.ideas.push(newIdea)
        user.save().then((user) => {
            res.json(newIdea)
        })
    })
})

router.get('/:ideaId/delete',(req,res)=>{
    const userId = req.params.userId
    const ideaId = req.params.ideaId

    User.findById(userId)
    .then((user)=>{
        user.ideas.id(ideaId).remove()
        return user.save()
    })
    .then(()=>{
        res.redirect(`/users/${userId}`)
    })
    .catch((error)=>{
        console.log(error)
    })
})

router.patch('/:ideaId',(req,res)=>{
    User.findById(req,params.userId).then((user)=>{
        const update = req.body.idea
        const idea = user.ideas.id(req.params.id)
        if(update.title){
            idea.title = update.title
        }
        if(update.description){
            idea.description = update.description
        }
        user.save().then((user)=>{
            user.ideas = user.ideas.reverse()
            res.json(user)
        })
    })
})

module.exports = router